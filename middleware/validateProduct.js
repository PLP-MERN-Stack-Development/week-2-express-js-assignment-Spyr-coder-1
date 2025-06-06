// middleware/validateProduct.js

const validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;

  if (!name || !description || price === undefined || !category || inStock === undefined) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (typeof price !== 'number' || price < 0) {
    return res.status(400).json({ error: 'Price must be a positive number.' });
  }

  if (typeof inStock !== 'boolean') {
    return res.status(400).json({ error: 'inStock must be true or false.' });
  }

  next(); // Valid product
};

module.exports = validateProduct;
