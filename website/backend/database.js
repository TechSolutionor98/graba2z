const mysql = require('mysql2/promise'); // Using mysql2 for promise-based API
require('dotenv').config();

// const db = mysql.createPool({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DATABASE_USER || 'root',
//     password: '',
//     database: process.env.DB_NAME || 'ecommerce',  
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
// });
const db = mysql.createPool({
    host: process.env.DB_HOST || 'srv1377.hstgr.io ',
    user: process.env.DATABASE_USER || 'u998585094_grabatoznode',
    password: 'Grabatoznode@112233',
    database: process.env.DB_NAME || 'u998585094_grabatoznode',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
// Function to test connection (optional) 
(async () => {
    try {
        const connection = await db.getConnection();
        console.log('MySQL Connected...');
        connection.release(); // Release connection back to the pool
    } catch (err) {
        console.error('Error connecting to MySQL:', err.message);
    }
})();


// const db = mysql.createPool({       
//     host: process.env.DB_HOST || 'localhost' ,  
//     user: process.env.DATABASE_USER || 'root' ,
//     password: process.env.DB_PASSWORD || '' ,
//     database: process.env.DB_NAME || 'ecommerce',
//     waitForConnections: true, // Will wait for a free connection 
//     connectionLimit: 10, // Maximum number of connections to create at once
//     queueLimit: 0 // Unlimited request queue
// });

// // Function to test connection (optional)
// (async () => {
//     try {
//         const connection = await db.getConnection();
//         console.log('MySQL Connected...');
//         connection.release(); // Release connection back to pool

//         //   Call the function to clear and insert dummy data
//         //   await clearAndInsertDummyData2();
//     } catch (err) {
//         console.error('Error connecting to MySQL:', err.message);
//     }
// })();

module.exports = db;
