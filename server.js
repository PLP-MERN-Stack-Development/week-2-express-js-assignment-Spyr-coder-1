// server.js - Starter Express server for Week 2 assignment

// Import required modules
const validateProduct = require('./middleware/validateProduct');
const auth = require('./middleware/auth');
require('dotenv').config();
const logger = require('./middleware/logger');
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const errorHandler = require('./middleware/errorHandler');

app.put('/api/products/:id', auth, validateProduct, (req, res, next) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    const err = new Error('Product not found');
    err.status = 404;
    return next(err);
  }

  // ... update logic
});


app.post('/api/products', auth, (req, res) => {
app.post('/api/products', auth, validateProduct, (req, res) => {
app.get('/api/products/:id', (req, res, next) => {
  const product = products.find(p => p.id === req.params.id);

  if (!product) {
    const err = new Error('Product not found');
    err.status = 404;
    return next(err);
  }

  res.json(product);
});

app.post('/api/products', auth, validateProduct, (req, res) => {
  const { name, description, price, category, inStock } = req.body;

  const newProduct = {
    id: uuidv4(),
    name,
    description,
    price,
    category,
    inStock
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

  // create product
});

app.put('/api/products/:id', auth, validateProduct, (req, res) => {
  // update product
});

  // create product
});

app.put('/api/products/:id', auth, (req, res) => {
  // update product
});

app.delete('/api/products/:id', auth, (req, res) => {
  // delete product
});


// Initialize Express app
const app = express();
app.use(logger);
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(errorHandler);


// Sample in-memory products database
let products = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with 16GB RAM',
    price: 1200,
    category: 'electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model with 128GB storage',
    price: 800,
    category: 'electronics',
    inStock: true
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with timer',
    price: 50,
    category: 'kitchen',
    inStock: false
  }
];

// Root route
app.get('/', (req, res) => {
  res.send('Hello, I am Jeremy and I have to master you by all means, hahahahahahaha.');
});

// TODO: Implement the following routes:
// GET /api/products - Get all products
// GET /api/products/:id - Get a specific product
// POST /api/products - Create a new product
// PUT /api/products/:id - Update a product
// DELETE /api/products/:id - Delete a product

// Example route implementation for GET /api/products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// TODO: Implement custom middleware for:
// - Request logging
// - Authentication
// - Error handling

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

app.post('/api/products', (req, res) => {
  const { name, description, price, category, inStock } = req.body;

  // Basic validation
  if (!name || !description || price == null || !category || inStock == null) {
    return res.status(400).json({ error: 'All product fields are required' });
  }

  const newProduct = {
    id: uuidv4(),
    name,
    description,
    price,
    category,
    inStock
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/api/products/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === req.params.id);
  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const { name, description, price, category, inStock } = req.body;
  if (!name || !description || price == null || !category || inStock == null) {
    return res.status(400).json({ error: 'All product fields are required' });
  }

  products[productIndex] = {
    id: req.params.id,
    name,
    description,
    price,
    category,
    inStock
  };

  res.json(products[productIndex]);
});

app.delete('/api/products/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === req.params.id);
  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  products.splice(productIndex, 1);
  res.status(204).send();
});



// Export the app for testing purposes
module.exports = app; 
// Sample in-memory products database
app.get('/error', (req, res, next) => {
  const error = new Error('This is a test error!');
  error.status = 418; // I'm a teapot ☕️
  next(error); // send to errorHandler
});
