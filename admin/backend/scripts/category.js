// const mysql = require('mysql2/promise');
// const XLSX = require('xlsx');
// const https = require('https');
// const fs = require('fs');
// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// // MySQL connection configuration
// const dbConfig = {
//   host: process.env.DB_HOST,
//   user: process.env.DATABASE_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// };

// // Path to the uploads folder and Excel file
// const uploadsDir = path.join(__dirname, '../uploads');
// const excelFilePath = path.join(__dirname, 'category.xlsx');

// // Ensure uploads directory exists
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir, { recursive: true });
// }

// // Function to download and save image using https
// const downloadImage = (url, filePath) => {
//   return new Promise((resolve, reject) => {
//     https.get(url, (response) => {
//       if (response.statusCode !== 200) {
//         reject(new Error(`Failed to download image: ${response.statusCode}`));
//         return;
//       }
//       const fileStream = fs.createWriteStream(filePath);
//       response.pipe(fileStream);
//       fileStream.on('finish', () => {
//         fileStream.close();
//         resolve();
//       });
//     }).on('error', (error) => {
//       reject(error);
//     });
//   });
// };

// // Main function to process the Excel file and insert into database
// const syncCategories = async () => {
//   let connection;
//   try {
//     // Create MySQL connection
//     connection = await mysql.createConnection(dbConfig);
//     console.log('Connected to MySQL database');

//     // Read the Excel file using xlsx
//     const workbook = XLSX.readFile(excelFilePath);
//     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//     const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//     // Process Excel rows (skip header row)
//     const excelCategories = excelData.slice(1).map((row) => ({
//       id: row[0] || null,
//       name: row[1] || '',
//       slug: row[2] || '',
//       description: row[3] || '',
//       display_type: row[4] || '',
//       parent_category: row[5] || null,
//       image_path: row[6] || '',
//       status: row[7] || '',
//     }));

//     // Insert each category into the database
//     for (const excelCat of excelCategories) {
//       // Skip if ID is missing
//       if (!excelCat.id) {
//         console.log('Skipping category with missing ID');
//         continue;
//       }

//       // Insert the category into the database
//       const currentTimestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
//       const query = `
//         INSERT INTO product_categories (id, name, status, image_path, description, created_at, updated_at, parent_category)
//         VALUES (?, ?, ?, ?, ?, ?, ?, ?)
//       `;

//       const values = [
//         excelCat.id,
//         excelCat.name,
//         excelCat.status,
//         excelCat.image_path,
//         excelCat.description || null, // Use NULL if description is empty
//         currentTimestamp,
//         currentTimestamp,
//         excelCat.parent_category === 0 ? null : excelCat.parent_category, // Use NULL if parent_category is 0
//       ];

//       await connection.execute(query, values);
//       console.log(`Inserted category ID ${excelCat.id} into database.`);

//       // Handle image download if image_path exists
//       if (excelCat.image_path) {
//         const fileName = path.basename(excelCat.image_path);
//         const localImagePath = path.join(uploadsDir, fileName);
//         try {
//           await downloadImage(excelCat.image_path, localImagePath);
//           console.log(`Downloaded image for category ID ${excelCat.id} to ${localImagePath}`);
//         } catch (error) {
//           console.error(`Failed to download image for category ID ${excelCat.id}:`, error.message);
//         }
//       }
//     }

//     console.log('Sync completed successfully.');
//   } catch (error) {
//     console.error('Error during sync:', error.message);
//   } finally {
//     if (connection) await connection.end();
//   }
// };

// // Run the sync process
// syncCategories();



const mysql = require('mysql2/promise');
const XLSX = require('xlsx');
const https = require('https');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// MySQL connection configuration
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// Path to the uploads folder and Excel file
const uploadsDir = path.join(__dirname, '../uploads');
const excelFilePath = path.join(__dirname, 'category.xlsx');

// Ensure uploads directory exists and is writable
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
fs.accessSync(uploadsDir, fs.constants.W_OK); // Check if directory is writable

// Function to validate URL
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

// Function to download and save image using https
const downloadImage = (url, filePath) => {
  return new Promise((resolve, reject) => {
    if (!isValidUrl(url)) {
      reject(new Error('Invalid URL'));
      return;
    }

    console.log(`Attempting to download image from: ${url}`);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP Status Code: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filePath);
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Successfully downloaded image to: ${filePath}`);
        resolve();
      });
      fileStream.on('error', (error) => {
        reject(new Error(`File write error: ${error.message}`));
      });
    }).on('error', (error) => {
      reject(new Error(`HTTPS request error: ${error.message}`));
    });
  });
};

// Main function to process the Excel file and insert into database
const syncCategories = async () => {
  let connection;
  try {
    // Create MySQL connection
    connection = await mysql.createConnection(dbConfig);
    console.log('Connected to MySQL database');

    // Read the Excel file using xlsx
    const workbook = XLSX.readFile(excelFilePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Process Excel rows (skip header row)
    const excelCategories = excelData.slice(1).map((row) => ({
      id: row[0] || null,
      name: row[1] || '',
      slug: row[2] || '',
      description: row[3] || '',
      display_type: row[4] || '',
      parent_category: row[5] || null,
      image_path: row[6] || '',
      status: row[7] || '',
    }));

    // Insert each category into the database
    for (const excelCat of excelCategories) {
      // Skip if ID is missing
      if (!excelCat.id) {
        console.log('Skipping category with missing ID');
        continue;
      }

      // Insert the category into the database
      const currentTimestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
      let localImagePath = excelCat.image_path;

      // Handle image download if image_path exists
      if (excelCat.image_path) {
        const fileName = path.basename(excelCat.image_path);
        const localFilePath = path.join(uploadsDir, fileName);
        try {
          await downloadImage(excelCat.image_path, localFilePath);
          // Update the image_path to the local path
          localImagePath = path.join('uploads', fileName).replace(/\\/g, '/'); // Use forward slashes for consistency
        } catch (error) {
          console.error(`Failed to download image for category ID ${excelCat.id}: ${error.message}`);
          localImagePath = ''; // If download fails, set image_path to empty
        }
      }

      const query = `
        INSERT INTO product_categories (id, name, status, image_path, description, created_at, updated_at, parent_category)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const values = [
        excelCat.id,
        excelCat.name,
        excelCat.status,
        localImagePath || null, // Use local path if downloaded, otherwise NULL
        excelCat.description || null,
        currentTimestamp,
        currentTimestamp,
        excelCat.parent_category === 0 ? null : excelCat.parent_category,
      ];

      await connection.execute(query, values);
      console.log(`Inserted category ID ${excelCat.id} into database with image_path: ${localImagePath || 'NULL'}`);
    }

    console.log('Sync completed successfully.');
  } catch (error) {
    console.error('Error during sync:', error.message);
  } finally {
    if (connection) await connection.end();
  }
};

// Run the sync process
syncCategories();