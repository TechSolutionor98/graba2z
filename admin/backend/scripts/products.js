// const express = require('express');
// const mysql = require('mysql2/promise');
// const XLSX = require('xlsx');
// const axios = require('axios');
// const fs = require('fs');
// const path = require('path');
// require('dotenv').config();

// const app = express();

// // Database configuration
// const dbConfig = {
//     host: process.env.DB_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// };

// // Create uploads directory if it doesn't exist
// const uploadsDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadsDir)) {
//     fs.mkdirSync(uploadsDir, { recursive: true });
// }

// // Function to download image from URL
// async function downloadImage(url, filename) {
//     try {
//         const response = await axios({
//             method: 'GET',
//             url: url,
//             responseType: 'stream'
//         });

//         const writer = fs.createWriteStream(filename);
//         response.data.pipe(writer);

//         return new Promise((resolve, reject) => {
//             writer.on('finish', resolve);
//             writer.on('error', reject);
//         });
//     } catch (error) {
//         console.error(`Error downloading image ${url}:`, error.message);
//         return null;
//     }
// }

// // Function to process Excel file and import data
// async function importExcelToDatabase() {
//     try {
//         // Read Excel file
//         const workbook = XLSX.readFile('products.xlsx');
//         const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//         const data = XLSX.utils.sheet_to_json(worksheet);

//         // Create database connection
//         const connection = await mysql.createConnection(dbConfig);

//         // Process each row
//         for (const row of data) {
//             try {
//                 // Map Excel columns to database columns
//                 const productData = {
//                     name: row.Name || '',
//                     sku: row.SKU || '',
//                     category: row.Categories ? row.Categories.split('>')[0].trim() : '',
//                     barcode: row['GTIN, UPC, EAN, or ISBN'] || '',
//                     buying_price: row['Regular price'] || 0,
//                     selling_price: row['Sale price'] || row['Regular price'] || 0,
//                     tax: row['Tax status'] === 'taxable' ? 1 : 0,
//                     brand: row.Brand || '',
//                     status: row.Published === '1' ? 'active' : 'inactive',
//                     can_purchasable: 1,
//                     show_stock_out: row['In stock?'] === '1' ? 1 : 0,
//                     refundable: 1,
//                     max_purchase_quantity: 10,
//                     low_stock_warning: row['Low stock amount'] || 5,
//                     unit: 'pc',
//                     weight: row['Weight (kg)'] || 0,
//                     tags: row.Tags || '',
//                     description: row.Description || '',
//                     offer_price: row['Sale price'] || 0,
//                     discount: row['Sale price'] ? 
//                         ((row['Regular price'] - row['Sale price']) / row['Regular price'] * 100).toFixed(2) : 0,
//                     image_path: '',
//                     image_paths: '',
//                     specifications: JSON.stringify({
//                         processor: row['processor'] || '',
//                         memory: row['Memory Ram'] || '',
//                         storage: row['storage'] || '',
//                         graphics: row['Graphics'] || '',
//                         display: row['Resolution'] || '',
//                         battery: row['Battery'] || '',
//                         ports: row['Ports'] || '',
//                         color: row['color'] || ''
//                     }),
//                     details: row['Short description'] || ''
//                 };

//                 // Handle images
//                 if (row.Images) {
//                     const imageUrls = row.Images.split(',').map(url => url.trim());
//                     const imagePaths = [];
                    
//                     // Download and save images
//                     for (let i = 0; i < imageUrls.length; i++) {
//                         const url = imageUrls[i];
//                         const ext = path.extname(url) || '.jpg';
//                         const filename = `${row.SKU || 'image'}-${i}${ext}`;
//                         const filePath = path.join(uploadsDir, filename);
                        
//                         await downloadImage(url, filePath);
//                         imagePaths.push(`/uploads/${filename}`);
//                     }

//                     // Set first image as main image
//                     if (imagePaths.length > 0) {
//                         productData.image_path = imagePaths[0];
//                         productData.image_paths = imagePaths.slice(1).join(',');
//                     }
//                 }

//                 // Insert into database
//                 const sql = `
//                     INSERT INTO products (
//                         name, sku, category, barcode, buying_price,
//                         selling_price, tax, brand, status, can_purchasable,
//                         show_stock_out, refundable, max_purchase_quantity,
//                         low_stock_warning, unit, weight, tags, description,
//                         offer_price, discount, image_path, image_paths, specifications, details
//                     )
//                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//                 `;

//                 const values = [
//                     productData.name,
//                     productData.sku,
//                     productData.category,
//                     productData.barcode,
//                     productData.buying_price,
//                     productData.selling_price,
//                     productData.tax,
//                     productData.brand,
//                     productData.status,
//                     productData.can_purchasable,
//                     productData.show_stock_out,
//                     productData.refundable,
//                     productData.max_purchase_quantity,
//                     productData.low_stock_warning,
//                     productData.unit,
//                     productData.weight,
//                     productData.tags,
//                     productData.description,
//                     productData.offer_price,
//                     productData.discount,
//                     productData.image_path,
//                     productData.image_paths,
//                     productData.specifications,
//                     productData.details
//                 ];

//                 await connection.execute(sql, values);
//                 console.log(`Product imported: ${productData.name}`);
//             } catch (error) {
//                 console.error(`Error importing product ${row.Name || 'unknown'}:`, error.message);
//             }
//         }

//         await connection.end();
//         console.log('Import completed successfully!');
//     } catch (error) {
//         console.error('Error during import:', error);
//     }
// }

// // Start the import process
// importExcelToDatabase();

// // Start Express server (optional)
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
const mysql = require('mysql2/promise');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const https = require('https');
const http = require('http');

// ✅ Load .env from root directory
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const uploadsDir = '../uploads';
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

// ✅ DB Connection using correct env keys
const connectDB = async () => {
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  };

  // Debug print
  console.log('Connecting with:', dbConfig);

  return mysql.createConnection(dbConfig);
};

// ✅ Image downloader (no axios)
const downloadImage = async (url) => {
  return new Promise((resolve) => {
    if (!url) return resolve('');
    const filename = path.basename(url.split('?')[0]);
    const filepath = path.join(uploadsDir, filename);
    const file = fs.createWriteStream(filepath);

    const client = url.startsWith('https') ? https : http;

    client.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => file.close(() => resolve(`uploads/${filename}`)));
      } else {
        file.close();
        if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
        console.warn(`⚠️ Failed to download: ${url}`);
        resolve('');
      }
    }).on('error', (err) => {
      console.error(`❌ Error downloading ${url}:`, err.message);
      resolve('');
    });
  });
};

const runImport = async () => {
  const workbook = xlsx.readFile('./products.xlsx');
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet);

  const connection = await connectDB();

  for (const row of data) {
    const images = (row['Images'] || '').split(',').map(img => img.trim()).filter(Boolean);
    const firstImage = images[0] || '';
    const image_path = firstImage ? await downloadImage(firstImage) : '';
    const image_paths = images.length ? JSON.stringify(images) : '';

    const fields = {
      name: row['Name'] || '',
      sku: row['SKU'] || '',
      category: row['Categories'] || '',
      barcode: '',
      buying_price: '',
      selling_price: row['Regular price'] || '',
      offer_price: row['Sale price'] || '',
      tax: '',
      brand: '',
      status: 'Active',
      can_purchasable: 'Yes',
      show_stock_out: 'Enable',
      refundable: 'Yes',
      max_purchase_quantity: '',
      low_stock_warning: '',
      unit: '',
      weight: '',
      tags: row['Tags'] || '',
      description: row['Short description'] || '',
      image_path,
      image_paths,
      discount: '',
      specifications: '',
      details: ''
    };

    const sql = `
      INSERT INTO products (
        ${Object.keys(fields).join(', ')}
      ) VALUES (
        ${Object.keys(fields).map(() => '?').join(', ')}
      )
    `;

    try {
      await connection.execute(sql, Object.values(fields));
      console.log(`✅ Inserted: ${fields.name}`);
    } catch (err) {
      console.error(`❌ Failed to insert ${fields.name}:`, err.message);
    }
  }

  await connection.end();
  console.log('✅ Import complete.');
};

runImport();
