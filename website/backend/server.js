const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('./database'); // Ensure this file is properly set up to handle database connections
const authenticate = require('./middleware/authMiddleware'); // Middleware for authentication
const path = require('path');


require('dotenv').config(); // Load environment variables 
const app = express();


// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data



// API endpoint
// app.get('/api/products', (req, res) => {
//     const query = 'SELECT * FROM products';
//     db.query(query, (err, results) => {
//         if (err) throw err;
//         res.json(results);
//     });
// });

// // Register Endpoint
// app.post('/register', async (req, res) => {
//     const {
//         name,
//         email,
//         password,
//         confirmPassword,
//         phone,
//         address,
//         country,
//         state,
//         city,
//         zip_code,
//     } = req.body;

//     if (password !== confirmPassword) {
//         return res.status(400).json({ error: 'Passwords do not match' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const query = `
//         INSERT INTO customers (name, email, phone, status, password, address, country, state, city, zip_code)
//         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `;

//     const defaultStatus = 'active'; // Default value for status

//     db.query(
//         query,
//         [name, email, phone, defaultStatus, hashedPassword, address, country, state, city, zip_code],
//         (err, result) => {
//             if (err) {
//                 return res.status(500).json({ error: 'Database error', details: err });
//             }
//             res.status(201).json({ message: 'User registered successfully' });
//         }
//     );
// });

// // Login API 
// app.post('/login', async (req, res) => {
//     const { email, password } = req.body; 

//     // Basic validation
//     if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required.' });
//     }

//     try {
//         // Check if the user exists
//         const [rows] = await db.query('SELECT * FROM customers WHERE email = ?', [email]);

//         if (rows.length === 0) {
//             return res.status(404).json({ message: 'User not found.' });
//         }

//         const user = rows[0];

//         // Compare passwords
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             return res.status(401).json({ accessToken: null, message: 'Invalid password.' });
//         }

//         // Generate a JWT token
//         const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || '04d063ae4d2932d2f0eb6fe569328eebdea5be494db648b1fb28048267c858ef', { expiresIn: 86400 }); // 24 hours

//         res.status(200).json({
//             id: user.id,
//             name: user.name,
//             email: user.email,
//             accessToken: token 
//         });
//     } catch (err) {
//         console.error('Error during login:', err.message);
//         res.status(500).json({ error: 'Server error during login' });
//     }
// });

// // Protected Endpoint Example
// app.get('/protected', authenticate, (req, res) => {
//     res.status(200).json({ message: `Welcome, user ${req.user.id}` });
// });


// // Get all sliders
// // app.get('/api/sliders', (req, res) => {
// //     const query = 'SELECT id, image, title, status FROM slider';

// //     db.query(query, (err, results) => {
// //         if (err) {
// //             console.error('Error fetching sliders:', err.message);
// //             return res.status(500).json({ message: 'Error fetching sliders', error: err.message });
// //         }

// //         res.status(200).json(results);
// //     });
// // });

// app.get('/api/sliders', (req, res) => {
//     const query = 'SELECT id, image, title, status FROM slider ORDER BY id ASC'; // Ensure ordering by ID

//     db.query(query, (err, results) => {
//         if (err) {
//             console.error('Error fetching sliders:', err.message);
//             return res.status(500).json({ message: 'Error fetching sliders', error: err.message });
//         }

//         res.status(200).json(results);
//     });
// });



// // Start the Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


// Get all products
// app.get('/api/products', async (req, res) => {
//     const query = 'SELECT * FROM products';
//     try {
//         const [results] = await db.query(query);
//         res.json(results);
//     } catch (err) {
//         console.error('Error fetching products:', err.message);
//         res.status(500).json({ message: 'Error fetching products', error: err.message });
//     }
// });

// Register Endpoint 
app.post('/register', async (req, res) => {
    const {
        name,
        email,
        password,
        confirmPassword,
        phone,
        address,
        country,
        state,
        city,
        zip_code,
    } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const query = `
            INSERT INTO customers (name, email, phone, status, password, address, country, state, city, zip_code)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const defaultStatus = 'active'; // Default value for status

        const [result] = await db.query(query, [
            name,
            email,
            phone,
            defaultStatus,
            hashedPassword,
            address,
            country,
            state,
            city,
            zip_code,
        ]);

        res.status(201).json({ message: 'User registered successfully', id: result.insertId });
    } catch (err) {
        console.error('Error during registration:', err.message);
        res.status(500).json({ error: 'Database error', details: err.message });
    }
});

// Login API
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    try {
        // Check if the user exists
        const [rows] = await db.query('SELECT * FROM customers WHERE email = ?', [email]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const user = rows[0];

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ accessToken: null, message: 'Invalid password.' });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET || '04d063ae4d2932d2f0eb6fe569328eebdea5be494db648b1fb28048267c858ef',
            { expiresIn: 86400 } // 24 hours
        );

        res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email,
            accessToken: token,
        });
    } catch (err) {
        console.error('Error during login:', err.message);
        res.status(500).json({ error: 'Server error during login' });
    }
});

// Protected Endpoint Example
app.get('/protected', authenticate, async (req, res) => {
    try {
        res.status(200).json({ message: `Welcome, user ${req.user.id}` });
    } catch (err) {
        console.error('Error in protected endpoint:', err.message);
        res.status(500).json({ error: 'Server error during protected request' });
    }
});



// Get all sliders
// app.get('/api/sliders', async (req, res) => {
//     const query = 'SELECT id, image, title, status FROM slider ORDER BY id ASC';

//     try {
//         const [results] = await db.query(query);
//         res.status(200).json(results);
//     } catch (err) {
//         console.error('Error fetching sliders:', err.message);
//         res.status(500).json({ message: 'Error fetching sliders', error: err.message });
//     }
// });

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// console.log('Serving static files from:', path.join(__dirname, 'uploads'));


app.get('/api/slider', async (req, res) => {
    try {
      const [rows] = await db.query('SELECT id, title, image, status FROM slider');
      rows.forEach(row => {
        if (row.image) { 
            row.image = row.image.replace(/\\/g, '/'); // Replace backslashes with forward slashes
        }
    });

   
      res.status(200).json(rows);

    } catch (err) {
      console.error('Error fetching sliders:', err.message);
      res.status(500).json({ message: 'Error fetching sliders', error: err.message });
    }
  }); 

//   app.get('/api/products', async (req, res) => {
//     try {
//         // SQL query to fetch products with the specified category and status
//         const sql = `
//             SELECT id, name, selling_price, image_path 
//             FROM products 
//             WHERE category = 'Computing Devices' AND status = 'Active'
//         `;
//         const [products] = await db.query(sql);

//         // Check if products exist
//         if (products.length === 0) {
//             return res.status(200).json({ message: 'No products found.', products: [] });
//         }

//         res.status(200).json({ products });
//     } catch (err) {
//         console.error('Error fetching products:', err.message);
//         res.status(500).json({ message: 'Error fetching products.', error: err.message });
//     }
// });

// app.get('/api/products', async (req, res) => {
//     try {
//         const [rows] = await db.query(`
//             SELECT id, name, selling_price, image_path 
//             FROM products 
            
//         `);
//         rows.forEach(row => {
//             if (row.image_path) { 
//                 row.image_path = row.image_path.replace(/\\/g, '/'); // Replace backslashes with forward slashes
//             }
//         });
        

//         // rows.forEach(row => {
//         //     if (row.image_path) {
//         //         row.image_path = row.image_path.replace(/\\/g, '/'); // Replace backslashes with forward slashes
//         //     }
//         // });
//         console.log('Products Retrieved:', rows);
//         res.status(200).json( rows );
//     } catch (err) {
//         console.error('Error fetching products:', err.message);
//         res.status(500).json({ message: 'Error fetching products', error: err.message });
//     }
// });

// app.get('/api/products', async (req, res) => {
//     console.log('➡️ API Endpoint /api/products Hit');

//     try {
//         const [rows] = await db.query(`
//             SELECT id, name, selling_price, image_path 
//             FROM products 
//             WHERE category = 'Computing Devices' AND status = 'Active'
//         `);

//         console.log('✅ Database Query Successful, Rows Fetched:', rows);

//         rows.forEach(row => {
//             if (row.image_path) {
//                 row.image_path = row.image_path.replace(/\\/g, '/'); // Replace backslashes with forward slashes
//             }
//         });

//         console.log('🚀 Processed Rows:', rows);
//         res.status(200).json({ products: rows });
//     } catch (err) {
//         console.error('❌ Error fetching products:', err.message);
//         res.status(500).json({ message: 'Error fetching products', error: err.message });
//     }
// });

// app.get('/api/products', async (req, res) => {
//     console.log('➡️ API Endpoint /api/products Hit');

//     // Get category from query parameters, if not provided fetch all
//     const category = req.query.category;

//     try {
//         // Build query dynamically based on whether a category is provided
//         let query = `
//             SELECT id, name, selling_price, image_path, category, status
//             FROM products
//         `;
//         const params = [];

//         if (category) {
//             query += ` WHERE category = ? AND status = 'Active'`;
//             params.push(category);
//         } else {
//             query += ` WHERE status = 'Active'`;
//         }

//         const [rows] = await db.query(query, params);

//         console.log('✅ Database Query Successful, Rows Fetched:', rows);

//         rows.forEach(row => {
//             if (row.image_path) {
//                 row.image_path = row.image_path.replace(/\\/g, '/'); // Replace backslashes with forward slashes
//             }
//         });

//         console.log('🚀 Processed Rows:', rows);
//         res.status(200).json({ products: rows });
//     } catch (err) {
//         console.error('❌ Error fetching products:', err.message);
//         res.status(500).json({ message: 'Error fetching products', error: err.message });
//     }
// });

// app.get('/api/products', async (req, res) => {
//     console.log('➡️ API Endpoint /api/products Hit');

//     const category = req.query.category;

//     try {
//         let query = `
//             SELECT id, name, selling_price, image_path, category, status
//             FROM products
//         `;
//         const params = [];

//         if (category) {
//             query += ` WHERE category = ? AND status = 'Active'`;
//             params.push(category);
//         } else {
//             query += ` WHERE status = 'Active'`;
//         }

//         // First, get the total count of matching products
//         const [totalRows] = await db.query('SELECT COUNT(*) as totalCount FROM products WHERE status = "Active" AND category = ?', params);

//         // Now get the paginated products (if applicable)
//         query += ' LIMIT 20'; // Example: Fetch first 20 products (you can handle pagination later)
//         const [rows] = await db.query(query, params);

//         rows.forEach(row => {
//             if (row.image_path) {
//                 row.image_path = row.image_path.replace(/\\/g, '/');
//             }
//         });

//         res.status(200).json({
//             products: rows,
//             totalCount: totalRows[0].totalCount // Return total count of products
//         });
//     } catch (err) {
//         console.error('❌ Error fetching products:', err.message);
//         res.status(500).json({ message: 'Error fetching products', error: err.message });
//     }
// });

// app.get('/api/products', async (req, res) => {
//     console.log('➡️ API Endpoint /api/products Hit');

//     const category = req.query.category;

//     try {
//         let query = `
//             SELECT id, name, selling_price, image_path, category, status
//             FROM products
//             WHERE status = 'Active'
//         `;
//         const params = [];

//         // Add category filter if category is provided
//         if (category) {
//             query += ` AND category = ?`;
//             params.push(category);
//         }

//         // 
//         // First, get the total count of matching products
//         const [totalRows] = await db.query('SELECT COUNT(*) as totalCount FROM products WHERE status = "Active"' + (category ? ' AND category = ?' : ''), params);

//         // Now get the paginated products (if applicable)
//         query += ' LIMIT 20'; // Example: Fetch first 20 products (you can handle pagination later)

//         const [rows] = await db.query(query, params);

//         // Fix image path if it exists
//         rows.forEach(row => {
//             if (row.image_path) {
//                 row.image_path = row.image_path.replace(/\\/g, '/');
//             }
//         });

//         res.status(200).json({
//             products: rows,
//             totalCount: totalRows[0].totalCount // Return total count of products
//         });
//     } catch (err) {
//         console.error('❌ Error fetching products:', err.message);
//         res.status(500).json({ message: 'Error fetching products', error: err.message });
//     }
// });

// app.get('/api/products', async (req, res) => {
//     console.log('➡️ API Endpoint /api/products Hit');

//     const { category, brand } = req.query;

//     try {
//         let query = `
//             SELECT id, name, selling_price, image_path, category, brand, status
//             FROM products
//             WHERE status = 'Active'
//         `;
//         const params = [];

//         // Add category filter if provided
//         if (category) {
//             query += ` AND category = ?`;
//             params.push(category);
//         }

//         // Add brand filter if provided
//         if (brand) {
//             query += ` AND brand = ?`;
//             params.push(brand);
//         }

//         // First, get the total count of matching products
//         const [totalRows] = await db.query(
//             `SELECT COUNT(*) as totalCount 
//              FROM products 
//              WHERE status = "Active"` +
//                 (category ? ' AND category = ?' : '') +
//                 (brand ? ' AND brand = ?' : ''),
//             params
//         );

//         // Fetch the paginated products
//         query += ' LIMIT 20'; // Example: Fetch first 20 products
//         const [rows] = await db.query(query, params);

//         rows.forEach((row) => {
//             if (row.image_path) {
//                 row.image_path = row.image_path.replace(/\\/g, '/');
//             }
//         });

//         res.status(200).json({
//             products: rows,
//             totalCount: totalRows[0].totalCount,
//         });
//     } catch (err) {
//         console.error('❌ Error fetching products:', err.message);
//         res.status(500).json({ message: 'Error fetching products', error: err.message });
//     }
// });

// app.get('/api/products', async (req, res) => {
//     console.log('➡️ API Endpoint /api/products Hit');

//     const { category, brand, minPrice, maxPrice } = req.query;

//     try {
//         let query = `
//             SELECT id, name, selling_price, image_path, category, brand, status
//             FROM products
//             WHERE status = 'Active'
//         `;
//         const params = [];

//         // Add category filter if provided
//         if (category) {
//             query += ` AND category = ?`;
//             params.push(category);
//         }

//         // Add brand filter if provided
//         if (brand) {
//             query += ` AND brand = ?`;
//             params.push(brand);
//         }

//         // Add price range filter if provided
//         if (minPrice) {
//             query += ` AND selling_price >= ?`;
//             params.push(minPrice);
//         }
//         if (maxPrice) {
//             query += ` AND selling_price <= ?`;
//             params.push(maxPrice);
//         }

//         // First, get the total count of matching products
//         const [totalRows] = await db.query(
//             `SELECT COUNT(*) as totalCount 
//              FROM products 
//              WHERE status = "Active"` +
//                 (category ? ' AND category = ?' : '') +
//                 (brand ? ' AND brand = ?' : '') +
//                 (minPrice ? ' AND selling_price >= ?' : '') +
//                 (maxPrice ? ' AND selling_price <= ?' : ''),
//             params
//         );

//         // Fetch the paginated products
//         query += ' LIMIT 20'; // Example: Fetch first 20 products
//         const [rows] = await db.query(query, params);

//         rows.forEach((row) => {
//             if (row.image_path) {
//                 row.image_path = row.image_path.replace(/\\/g, '/');
//             }
//         });

//         res.status(200).json({
//             products: rows,
//             totalCount: totalRows[0].totalCount,
//         });
//     } catch (err) {
//         console.error('❌ Error fetching products:', err.message);
//         res.status(500).json({ message: 'Error fetching products', error: err.message });
//     }
// });

// app.get('/api/products', async (req, res) => {
//     console.log('➡️ API Endpoint /api/products Hit');

//     const { category, brand, minPrice, maxPrice } = req.query;

//     try {
//         let query = `
//             SELECT id, name, selling_price, offer_price, image_path, image_paths, category, brand, status
//             FROM products
//             WHERE status = 'Active'
//         `;
//         const params = [];

//         // Add category filter if provided
//         if (category) {
//             query += ` AND category = ?`;
//             params.push(category);
//         }

//         // Add brand filter if provided
//         if (brand) {
//             query += ` AND brand = ?`;
//             params.push(brand);
//         }

//         // Add price range filter if provided
//         if (minPrice) {
//             query += ` AND selling_price >= ?`;
//             params.push(minPrice);
//         }
//         if (maxPrice) {
//             query += ` AND selling_price <= ?`;
//             params.push(maxPrice);
//         }

//         // First, get the total count of matching products
//         const [totalRows] = await db.query(
//             `SELECT COUNT(*) as totalCount 
//              FROM products 
//              WHERE status = "Active"` +
//                 (category ? ' AND category = ?' : '') +
//                 (brand ? ' AND brand = ?' : '') +
//                 (minPrice ? ' AND selling_price >= ?' : '') +
//                 (maxPrice ? ' AND selling_price <= ?' : ''),
//             params
//         );

//         // Fetch the paginated products
//         query += ' LIMIT 20'; // Example: Fetch first 20 products
//         const [rows] = await db.query(query, params);

//         rows.forEach((row) => {
//             if (row.image_path) {
//                 row.image_path = row.image_path.replace(/\\/g, '/');
//             }
//             if (row.image_paths) {
//                 // Parse the JSON string for multiple image paths
//                 row.image_paths = JSON.parse(row.image_paths).map((path) =>
//                     path.replace(/\\/g, '/')
//                 );
//             }
//         });

//         res.status(200).json({
//             products: rows,
//             totalCount: totalRows[0].totalCount,
//         });
//     } catch (err) {
//         console.error('❌ Error fetching products:', err.message);
//         res.status(500).json({ message: 'Error fetching products', error: err.message });
//     }
// });

// app.get('/api/products', async (req, res) => {
//     console.log('➡️ API Endpoint /api/products Hit');

//     const { category, brand, minPrice, maxPrice, search } = req.query;

//     try {
//         let query = `
//             SELECT id, name, selling_price, discount, offer_price, image_path, image_paths, category, brand, status
//             FROM products
//             WHERE status = 'Active'
//         `;
//         const params = [];

//         // Add category filter if provided
//         if (category) {
//             query += ` AND category = ?`;
//             params.push(category);
//         }

//         // Add brand filter if provided
//         if (brand) {
//             query += ` AND brand = ?`;
//             params.push(brand);
//         }

//         // Add search filter if provided
//         if (search) {
//             query += ` AND (name LIKE ? OR brand LIKE ?)`;
//             const searchPattern = `%${search}%`;
//             params.push(searchPattern, searchPattern);
//         }

//         // Add price range filter if provided
//         if (minPrice) {
//             query += ` AND selling_price >= ?`;
//             params.push(minPrice);
//         }
//         if (maxPrice) {
//             query += ` AND selling_price <= ?`;
//             params.push(maxPrice);
//         }

//         // Fetch the products
//         query += ' LIMIT 20'; // Example: Fetch first 20 products
//         const [rows] = await db.query(query, params);

//         // Process image paths
//         rows.forEach((row) => {
//             if (row.image_path) {
//                 row.image_path = row.image_path.replace(/\\/g, '/');
//             }
//             if (row.image_paths) {
//                 row.image_paths = JSON.parse(row.image_paths).map((path) =>
//                     path.replace(/\\/g, '/')
//                 );
//             }
//         });

//         res.status(200).json({
//             products: rows,
//             totalCount: rows.length,
//         });
//     } catch (err) {
//         console.error('❌ Error fetching products:', err.message);
//         res.status(500).json({ message: 'Error fetching products', error: err.message });
//     }
// });


app.get('/api/products', async (req, res) => {
    console.log('➡️ API Endpoint /api/products Hit');

    const { category, brand, minPrice, maxPrice, search, discount } = req.query;

    try {
        let query = `
            SELECT id, name, selling_price, discount, offer_price, image_path, image_paths, category, brand, status, specifications, details
            FROM products
            WHERE status = 'Active'
        `;
        const params = [];

        // Add category filter if provided
        if (category) {
            query += ` AND category = ?`;
            params.push(category);
        }

        // Add brand filter if provided
        if (brand) {
            query += ` AND brand = ?`;
            params.push(brand);
        }

        // Add search filter if provided
        if (search) {
            query += ` AND (name LIKE ? OR brand LIKE ?)`;
            const searchPattern = `%${search}%`;
            params.push(searchPattern, searchPattern);
        }

        // Add price range filter if provided
        if (minPrice) {
            query += ` AND selling_price >= ?`;
            params.push(minPrice);
        }
        if (maxPrice) {
            query += ` AND selling_price <= ?`;
            params.push(maxPrice);
        }

        // Add discount filter if provided
        if (discount) {
            query += ` AND discount >= ?`;  // Assumes discount is a percentage value (e.g., 10, 20, 30)
            params.push(discount);
        }

        // Fetch the products
        query += ' LIMIT 20'; // Example: Fetch first 20 products
        const [rows] = await db.query(query, params);

        // Process image paths
        rows.forEach((row) => {
            if (row.image_path) {
                row.image_path = row.image_path.replace(/\\/g, '/');
            }
            if (row.image_paths) {
                row.image_paths = JSON.parse(row.image_paths).map((path) =>
                    path.replace(/\\/g, '/')
                );
            }
        });

        res.status(200).json({
            products: rows,
            totalCount: rows.length,
        });
    } catch (err) {
        console.error('❌ Error fetching products:', err.message);
        res.status(500).json({ message: 'Error fetching products', error: err.message });
    }
});

app.get('/api/filters', async (req, res) => {
    console.log('➡️ API Endpoint /api/filters Hit');

    try {
        const categoriesQuery = `SELECT DISTINCT category FROM products WHERE status = 'Active'`;
        const brandsQuery = `SELECT DISTINCT brand FROM products WHERE status = 'Active'`;

        const [categories] = await db.query(categoriesQuery);
        const [brands] = await db.query(brandsQuery);

        res.status(200).json({
            categories: categories.map((category) => category.category),
            brands: brands.map((brand) => brand.brand),
        });
    } catch (err) {
        console.error('❌ Error fetching filters:', err.message);
        res.status(500).json({ message: 'Error fetching filters', error: err.message });
    }
});



app.get('/api/products/:id', async (req, res) => {
    const productId = req.params.id;
    try {
        const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [productId]);
        if (rows.length > 0) {
            res.status(200).json(rows[0]);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        console.error('Error fetching product details:', err);
        res.status(500).json({ message: 'Error fetching product details', error: err.message });
    }
});

// API to get product counts per category
app.get('/api/product-counts', async (req, res) => {
    console.log('➡️ API Endpoint /api/product-counts Hit');

    try {
        const [rows] = await db.query(`
            SELECT category, COUNT(*) as product_count
            FROM products
            WHERE status = 'Active'
            GROUP BY category
        `);

        console.log('✅ Database Query Successful, Counts Fetched:', rows);

        res.status(200).json({ categoryCounts: rows });
    } catch (err) {
        console.error('❌ Error fetching category counts:', err.message);
        res.status(500).json({ message: 'Error fetching category counts', error: err.message });
    }
});

app.get('/api/product-brands', async (req, res) => {
    try {
        const sql = `
            SELECT name, image_path, status
            FROM product_brands
            WHERE status = 'Active'
        `;
        const [rows] = await db.query(sql);

        res.status(200).json(rows);
    } catch (err) {
        console.error('Error fetching product brands:', err.message);
        res.status(500).json({ message: 'Error fetching product brands' });
    }
});



// app.post('/api/orders', async (req, res) => {
//     const connection = await db.getConnection(); // Ensure db is the `mysql2/promise` pool
//     const { customerDetails, cart, totalAmount } = req.body;

//     try {
//         await connection.beginTransaction();

//         // Insert order details
//         const [orderResult] = await connection.query(
//             `INSERT INTO orders (first_name, last_name, country, street, apartment, city, state, post_code, phone, email, notes, total_amount, payment_method)
//              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//             [
//                 customerDetails.firstName,
//                 customerDetails.lastName,
//                 customerDetails.country,
//                 customerDetails.street,
//                 customerDetails.apartment || null,
//                 customerDetails.city,
//                 customerDetails.state,
//                 customerDetails.postCode,
//                 customerDetails.phone,
//                 customerDetails.email,
//                 customerDetails.notes,
//                 totalAmount,
//                 'Cash on Delivery',
//             ]
//         );

//         const orderId = orderResult.insertId;

//         // Insert order items
//         const orderItems = cart.map((item) => [
//             orderId,
//             item.name,
//             item.selling_price,
//             item.quantity,
//         ]);

//         await connection.query(
//             `INSERT INTO order_items (order_id, product_name, selling_price, quantity) VALUES ?`,
//             [orderItems]
//         );

//         await connection.commit();
//         res.status(201).json({ message: 'Order placed successfully', orderId });
//     } catch (error) {
//         await connection.rollback();
//         console.error('Error placing order:', error);
//         res.status(500).json({ message: 'Failed to place order', error: error.message });
//     } finally {
//         connection.release();
//     }
// });
app.post('/api/orders', async (req, res) => {
    const connection = await db.getConnection();
    const { customerDetails, cart, totalAmount } = req.body;

    try {
        // Log incoming request for debugging
        console.log('Incoming Request Body:', req.body);

        // Validate payload
        if (!customerDetails || !cart || cart.length === 0 || !totalAmount) {
            return res.status(400).json({ message: 'Invalid request payload' });
        }

        if (!customerDetails.firstName || !customerDetails.lastName || !customerDetails.email) {
            return res.status(400).json({ message: 'Missing required customer details' });
        }

        // Optional fields handling
        customerDetails.apartment = customerDetails.apartment || null;

        await connection.beginTransaction();

        // Insert order details
        const [orderResult] = await connection.query(
            `INSERT INTO orders (first_name, last_name, country, street, apartment, city, state, post_code, phone, email, notes, total_amount, payment_method)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                customerDetails.firstName,
                customerDetails.lastName,
                customerDetails.country,
                customerDetails.street,
                customerDetails.apartment,
                customerDetails.city,
                customerDetails.state,
                customerDetails.postCode,
                customerDetails.phone,
                customerDetails.email,
                customerDetails.notes,
                totalAmount,
                'Cash on Delivery', // Static payment method for now
            ]
        );

        const orderId = orderResult.insertId;

        // Insert order items
        const orderItems = cart.map((item) => [
            orderId,
            item.name,
            item.selling_price,
            item.quantity,
        ]);

        await connection.query(
            `INSERT INTO order_items (order_id, product_name, selling_price, quantity) VALUES ?`,
            [orderItems]
        );

        await connection.commit();
        res.status(201).json({ message: 'Order placed successfully', orderId });
    } catch (error) {
        await connection.rollback();
        console.error('Error placing order:', error);
        res.status(500).json({ message: 'Failed to place order', error: error.message });
    } finally {
        connection.release();
    }
});


 
// app.post('/api/coupons/validate', authenticate, async (req, res) => {
//     const { code } = req.body;

//     // Validate the input
//     if (!code) {
//         return res.status(400).json({ message: 'Coupon code is required.' });
//     }

//     try {
//         // Fetch coupon details from the database
//         const sql = `
//             SELECT * 
//             FROM coupons 
//             WHERE code = ? AND start_date <= NOW() AND end_date >= NOW()
//         `;
//         const [coupons] = await db.query(sql, [code]);

//         if (coupons.length === 0) {
//             return res.status(400).json({ message: 'Invalid or expired coupon.' });
//         }

//         const coupon = coupons[0];

//         // Check if the coupon usage exceeds the limit per user
//         const usageSql = `
//             SELECT COUNT(*) AS usage_count 
//             FROM coupon_usages 
//             WHERE coupon_code = ? AND user_id = ?
//         `;
//         const [usageData] = await db.query(usageSql, [code, req.user.id]);

//         if (usageData[0].usage_count >= coupon.limit_per_user) {
//             return res.status(400).json({ message: 'Coupon usage limit exceeded for this user.' });
//         }

//         res.status(200).json({
//             code: coupon.code,
//             discount: coupon.discount,
//             discount_type: coupon.discount_type,
//             min_order_amount: coupon.min_order_amount,
//             max_discount: coupon.max_discount,
//         });
//     } catch (err) {
//         console.error('Error validating coupon:', err.message);
//         res.status(500).json({ message: 'Error validating coupon.' });
//     }
// });

// app.post('/api/coupons/validate', async (req, res) => {
//     console.log('Incoming request body:', req.body);
//     const { code } = req.body;

//     // Validate the input
//     if (!code) {
//         return res.status(400).json({ message: 'Coupon code is required.' });
//     }

//     try {
//         // Fetch coupon details from the database
//         const sql = `
//             SELECT * 
//             FROM coupons 
//             WHERE code = ? AND start_date <= NOW() AND end_date >= NOW()
//         `;
//         console.log('SQL Query:', sql, 'with params:', [code]); 
//         const [coupons] = await db.query(sql, [code]);
//         console.log('Query result:', coupons);

//         if (coupons.length === 0) {
//             return res.status(400).json({ message: 'Invalid or expired coupon.' });
//         }

//         const coupon = coupons[0];

//         // Enforce limit per user using a client-side identifier (e.g., local storage)
//         if (coupon.limit_per_user > 0) {
//             const usageKey = `coupon_usage_${coupon.code}`;
//             const usageCount = parseInt(req.cookies[usageKey] || '0', 10);

//             if (usageCount >= coupon.limit_per_user) {
//                 return res.status(400).json({ message: 'Coupon usage limit exceeded.' });
//             }
//         }

//         res.status(200).json({
//             code: coupon.code,
//             discount: coupon.discount,
//             discount_type: coupon.discount_type,
//             min_order_amount: coupon.min_order_amount,
//             max_discount: coupon.max_discount,
//         });
//     } catch (err) {
//         console.error('Error validating coupon:', err.message);
//         res.status(500).json({ message: 'Error validating coupon.' });
//     }
// });

app.post('/api/coupons/validate', async (req, res) => {
    console.log('Incoming request body:', req.body);
    const { code, userId } = req.body; // Expect userId in the request body for per-user validation

    // Validate the input
    if (!code) {
        return res.status(400).json({ message: 'Coupon code is required.' });
    }

    try {
        // Fetch coupon details from the database
        const sql = `
            SELECT * 
            FROM coupons 
            WHERE code = ? 
              AND start_date <= NOW() 
              AND end_date >= NOW()
        `;
        console.log('SQL Query:', sql, 'with params:', [code]); 
        const [coupons] = await db.query(sql, [code]);
        console.log('Query result:', coupons);

        if (coupons.length === 0) {
            return res.status(400).json({ message: 'Invalid or expired coupon.' });
        }

        const coupon = coupons[0];

        // Validate limit per user using a backend storage or database mechanism
        if (coupon.limit_per_user > 0 && userId) {
            const usageSql = `
                SELECT COUNT(*) as usage_count 
                FROM coupon_usage 
                WHERE user_id = ? AND coupon_code = ?
            `;
            const [usageResults] = await db.query(usageSql, [userId, code]);
            const usageCount = usageResults[0]?.usage_count || 0;

            console.log(`User ${userId} has used coupon ${code} ${usageCount} times.`);

            if (usageCount >= coupon.limit_per_user) {
                return res.status(400).json({ message: 'Coupon usage limit exceeded.' });
            }
        }

        res.status(200).json({
            code: coupon.code,
            discount: coupon.discount,
            discount_type: coupon.discount_type,
            min_order_amount: coupon.min_order_amount,
            max_discount: coupon.max_discount,
        });
    } catch (err) {
        console.error('Error validating coupon:', err.message);
        res.status(500).json({ message: 'Error validating coupon.' });
    }
});



// app.get('/api/coupons',  async (req, res) => {
//     const { code } = req.query; // Retrieve the optional 'code' query parameter

//     try {
//         // Base query to fetch active coupons
//         let query = 'SELECT * FROM coupons ';
//         const params = [];

//         // If a specific coupon code is provided, append a condition to the query
//         if (code) {
//             query += ' AND code = ?';
//             params.push(code);
//         }

//         // Execute the query with the provided parameters
//         const [rows] = await db.query(query, params);

//         // If the specific coupon code does not exist, return a 404 error
//         if (code && rows.length === 0) {
//             return res.status(404).json({ message: 'Coupon not found' });
//         }

//         // Return the fetched coupon(s)
//         res.status(200).json(rows.length === 1 ? rows[0] : rows); // Single coupon or a list of coupons
//     } catch (error) {
//         console.error('Error fetching coupons:', error);
//         res.status(500).json({ message: 'Error fetching coupons', error: error.message });
//     }
// });

app.get('/api/coupons/validate', async (req, res) => {
    const { code } = req.query;

    if (!code) {
        return res.status(400).json({ message: 'Coupon code is required' });
    }

    try {
        const query = `
            SELECT * 
            FROM coupons 
            WHERE code = ? AND  start_date <= NOW() AND end_date >= NOW()
        `;
        const [rows] = await db.query(query, [code]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Invalid or expired coupon.' });
        }

        const coupon = rows[0];

        // Example additional validation: Check limit per user
        if (coupon.limit_per_user && coupon.limit_per_user <= 0) {
            return res.status(403).json({ message: 'Coupon usage limit reached.' });
        }

        // Return coupon details if valid
        res.status(200).json(coupon);
    } catch (err) {
        console.error('Error validating coupon:', err.message);
        res.status(500).json({ message: 'Error validating coupon' });
    }
});



// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
