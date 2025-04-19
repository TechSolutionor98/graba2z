const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
const xlsx = require('xlsx');
const axios = require('axios');
require('dotenv').config();

// Database configuration for local MySQL with no password
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '', // Explicit empty password
  database: 'ecommerce',
  multipleStatements: true,
  connectTimeout: 10000,
  waitForConnections: true,
  connectionLimit: 10
};

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Function to generate slug from product name
function generateSlug(name) {
  return name
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

// Function to test database connection
async function testConnection(connection) {
  try {
    await connection.query('SELECT 1');
    return true;
  } catch (error) {
    console.error('Database connection test failed. Please ensure:');
    console.error('1. MySQL server is running (try: sudo service mysql start)');
    console.error('2. The "ecommerce" database exists');
    console.error('3. MySQL root user has no password');
    console.error('4. You can connect manually with: mysql -u root -D ecommerce');
    return false;
  }
}

// Function to initialize database tables with slug column
async function initializeDatabase(connection) {
  try {
    await connection.query(`
      CREATE TABLE IF NOT EXISTS product_categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        status VARCHAR(50) DEFAULT 'active',
        description TEXT,
        specs TEXT,
        parent_category INT,
        image_path VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (parent_category) REFERENCES product_categories(id) ON DELETE SET NULL
      );
      
      CREATE TABLE IF NOT EXISTS product_brands (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        status VARCHAR(50) DEFAULT 'active',
        image_path VARCHAR(255),
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
      
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        sku VARCHAR(100) NOT NULL UNIQUE,
        category INT,
        barcode VARCHAR(100),
        buying_price DECIMAL(10,2),
        selling_price DECIMAL(10,2),
        tax VARCHAR(50),
        brand INT,
        status VARCHAR(50) DEFAULT 'active',
        can_purchasable BOOLEAN DEFAULT 1,
        show_stock_out BOOLEAN DEFAULT 1,
        refundable BOOLEAN DEFAULT 1,
        max_purchase_quantity INT,
        low_stock_warning INT,
        unit VARCHAR(50),
        weight VARCHAR(50),
        tags TEXT,
        description TEXT,
        offer_price DECIMAL(10,2),
        discount DECIMAL(10,2),
        image_path VARCHAR(255),
        image_paths TEXT,
        specifications TEXT,
        details TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (category) REFERENCES product_categories(id) ON DELETE SET NULL,
        FOREIGN KEY (brand) REFERENCES product_brands(id) ON DELETE SET NULL
      );
      
      -- Add slug column if it doesn't exist (for existing tables)
      ALTER TABLE products ADD COLUMN IF NOT EXISTS slug VARCHAR(255) NOT NULL AFTER name;
      
      -- Create index for slug if it doesn't exist
      CREATE UNIQUE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
    `);
    console.log('Database tables verified/created successfully');
  } catch (error) {
    console.error('Error initializing database tables:', error.message);
    throw error;
  }
}

// Function to download image
async function downloadImage(url, filename) {
  try {
    const response = await axios.get(url, { responseType: 'stream' });
    const filePath = path.join(uploadsDir, filename);
    const writer = fs.createWriteStream(filePath);
    
    response.data.pipe(writer);
    
    return new Promise((resolve, reject) => {
      writer.on('finish', () => resolve(filePath));
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Error downloading image ${url}:`, error.message);
    return null;
  }
}

// Main import function with slug support
async function importProducts() {
  let connection;
  try {
    console.log('Starting product import process...');
    
    // Connect to database
    console.log('Connecting to local MySQL database (no password)...');
    connection = await mysql.createConnection(dbConfig);
    
    // Test connection
    if (!await testConnection(connection)) {
      throw new Error('Failed to connect to database');
    }
    
    // Initialize database
    await initializeDatabase(connection);
    
    // Read Excel file
    const filePath = path.join(__dirname, 'dummy-products.xlsx');
    const workbook = xlsx.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(worksheet);
    
    console.log(`Found ${data.length} products to process`);
    
    // Process categories
    const categories = new Map();
    for (const row of data) {
      if (row.category) categories.set(row.category, row.parent_category || null);
      if (row.parent_category) categories.set(row.parent_category, null);
    }
    
    // Insert categories
    for (const [name, parent] of categories) {
      const [existing] = await connection.execute(
        'SELECT id FROM product_categories WHERE name = ?', 
        [name]
      );
      
      if (existing.length === 0) {
        let parentId = null;
        if (parent) {
          const [parentCat] = await connection.execute(
            'SELECT id FROM product_categories WHERE name = ?',
            [parent]
          );
          if (parentCat.length) parentId = parentCat[0].id;
        }
        
        await connection.execute(
          'INSERT INTO product_categories (name, parent_category) VALUES (?, ?)',
          [name, parentId]
        );
        console.log(`Added category: ${name}`);
      }
    }
    
    // Process brands
    const brands = new Set();
    for (const row of data) {
      if (row.brand) brands.add(row.brand);
    }
    
    for (const brand of brands) {
      const [existing] = await connection.execute(
        'SELECT id FROM product_brands WHERE name = ?',
        [brand]
      );
      
      if (existing.length === 0) {
        await connection.execute(
          'INSERT INTO product_brands (name) VALUES (?)',
          [brand]
        );
        console.log(`Added brand: ${brand}`);
      }
    }
    
    // Process products with slug generation
    for (const row of data) {
      try {
        // Generate slug from product name
        const slug = generateSlug(row.Name);
        
        // Get category ID
        const [category] = await connection.execute(
          'SELECT id FROM product_categories WHERE name = ?',
          [row.category]
        );
        const categoryId = category[0]?.id;
        
        // Get brand ID
        const [brand] = await connection.execute(
          'SELECT id FROM product_brands WHERE name = ?',
          [row.brand]
        );
        const brandId = brand[0]?.id;
        
        // Process images
        let mainImagePath = '';
        if (row.image_path) {
          const filename = path.basename(row.image_path);
          const savedPath = await downloadImage(row.image_path, filename);
          if (savedPath) {
            mainImagePath = path.relative(path.join(__dirname, '..'), savedPath);
          }
        }
        
        let additionalImagePaths = '';
        if (row.image_paths) {
          const urls = row.image_paths.split(',').map(url => url.trim());
          const savedPaths = [];
          for (const url of urls) {
            const filename = path.basename(url);
            const savedPath = await downloadImage(url, filename);
            if (savedPath) {
              savedPaths.push(path.relative(path.join(__dirname, '..'), savedPath));
            }
          }
          additionalImagePaths = savedPaths.join(',');
        }
        
        // Check if product exists
        const [existing] = await connection.execute(
          'SELECT id FROM products WHERE sku = ?',
          [row.SKU]
        );
        
        if (existing.length > 0) {
          // Update existing product including slug
          await connection.execute(
            `UPDATE products SET
              name = ?, slug = ?, category = ?, barcode = ?, buying_price = ?,
              selling_price = ?, tax = ?, brand = ?, status = ?,
              can_purchasable = ?, show_stock_out = ?, refundable = ?,
              max_purchase_quantity = ?, low_stock_warning = ?, unit = ?,
              weight = ?, tags = ?, description = ?, offer_price = ?,
              discount = ?, image_path = ?, image_paths = ?,
              specifications = ?, details = ?
            WHERE sku = ?`,
            [
              row.Name,
              slug,
              categoryId,
              row.barcode,
              row.buying_price,
              row.selling_price,
              row.tax,
              brandId,
              row.status || 'active',
              row.can_purchasable === 'Yes' ? 1 : 0,
              row.show_stock_out === 'Enable' ? 1 : 0,
              row.refundable === 'Yes' ? 1 : 0,
              row.max_purchase_quantity,
              row.low_stock_warning,
              row.unit,
              row.weight,
              row.tags,
              row.description,
              row.offer_price,
              row.discount,
              mainImagePath,
              additionalImagePaths,
              row.specifications,
              row.details,
              row.SKU
            ]
          );
          console.log(`Updated product: ${row.Name} (Slug: ${slug})`);
        } else {
          // Insert new product with slug
          await connection.execute(
            `INSERT INTO products (
              name, slug, sku, category, barcode, buying_price,
              selling_price, tax, brand, status, can_purchasable,
              show_stock_out, refundable, max_purchase_quantity,
              low_stock_warning, unit, weight, tags, description,
              offer_price, discount, image_path, image_paths,
              specifications, details
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              row.Name,
              slug,
              row.SKU,
              categoryId,
              row.barcode,
              row.buying_price,
              row.selling_price,
              row.tax,
              brandId,
              row.status || 'active',
              row.can_purchasable === 'Yes' ? 'Yes': 'no',
              row.show_stock_out === 'Enable' ? 'Enable' : 'Disable',
              row.refundable === 'Yes' ? 'Yes' : 'no',
              row.max_purchase_quantity,
              row.low_stock_warning,
              row.unit,
              row.weight,
              row.tags,
              row.description,
              row.offer_price,
              row.discount,
              mainImagePath,
              additionalImagePaths,
              row.specifications,
              row.details
            ]
          );
          console.log(`Added product: ${row.Name} (Slug: ${slug})`);
        }
      } catch (error) {
        console.error(`Error processing product ${row.Name}:`, error.message);
      }
    }
    
    console.log('Product import completed successfully!');
  } catch (error) {
    console.error('\n⛔ Error during import:', error.message);
    console.error('Please ensure:');
    console.error('1. MySQL server is running locally');
    console.error('2. "ecommerce" database exists');
    console.error('3. MySQL root user has no password');
    console.error('4. You can connect manually with: mysql -u root -D ecommerce');
  } finally {
    if (connection) {
      await connection.end();
      console.log('Database connection closed');
    }
  }
}

// Run the import
importProducts();