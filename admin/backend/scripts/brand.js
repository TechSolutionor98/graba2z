require('dotenv').config();
const mysql = require('mysql2/promise');
const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');
const https = require('https');
const { v4: uuidv4 } = require('uuid');

// Configure database connection
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Function to download image from URL and save locally
async function downloadAndSaveImage(imageUrl) {
    if (!imageUrl) return null;

    try {
        const fileExtension = path.extname(imageUrl) || '.jpg';
        const fileName = `${uuidv4()}${fileExtension}`;
        const filePath = path.join(uploadsDir, fileName);
        const relativePath = `uploads/${fileName}`;

        return new Promise((resolve, reject) => {
            https.get(imageUrl, (response) => {
                if (response.statusCode !== 200) {
                    console.error(`❌ Failed to download image (HTTP ${response.statusCode}): ${imageUrl}`);
                    return resolve(null);
                }

                const fileStream = fs.createWriteStream(filePath);
                response.pipe(fileStream);

                fileStream.on('finish', () => {
                    fileStream.close();
                    console.log(`✅ Downloaded image: ${imageUrl} -> ${relativePath}`);
                    resolve(relativePath);
                });
            }).on('error', (error) => {
                console.error(`❌ Error downloading image ${imageUrl}:`, error.message);
                resolve(null);
            });
        });
    } catch (error) {
        console.error(`❌ Error processing image ${imageUrl}:`, error.message);
        return null;
    }
}

async function readExcelData() {
    try {
        const filePath = path.join(__dirname, 'brands.xlsx');
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        return XLSX.utils.sheet_to_json(worksheet);
    } catch (error) {
        console.error('Error reading Excel file:', error);
        throw error;
    }
}

async function importBrands() {
    let connection;
    try {
        const brands = await readExcelData();
        connection = await mysql.createConnection(dbConfig);

        const insertQuery = `
            INSERT INTO product_brands (name, status, image_path, description)
            VALUES (?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE
                status = VALUES(status),
                image_path = VALUES(image_path),
                description = VALUES(description)
        `;

        for (const brand of brands) {
            const { status = 'Active', name, description, image_path } = brand;

            if (!name) {
                console.log('Skipping row with missing name');
                continue;
            }

            try {
                // Download and save image if URL exists
                const localImagePath = image_path ? await downloadAndSaveImage(image_path) : null;

                await connection.execute(insertQuery, [
                    name,
                    status,
                    localImagePath || null,
                    description || 'No description'
                ]);

                console.log(`✅ Successfully processed brand: ${name}`);
            } catch (error) {
                console.error(`❌ Error processing brand ${name}:`, error.message);
            }
        }

        console.log('🎉 Brand import completed!');
    } catch (error) {
        console.error('❌ Import failed:', error);
    } finally {
        if (connection) await connection.end();
        process.exit();
    }
}

importBrands();