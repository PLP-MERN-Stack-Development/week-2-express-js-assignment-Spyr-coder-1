// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
  console.error('❌ Error:', err.stack); // shows full error in terminal

  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      code: err.code || 'SERVER_ERROR'
    }
  });
};

module.exports = errorHandler;
