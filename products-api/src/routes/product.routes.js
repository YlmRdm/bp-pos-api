const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

// ==> 'Product': (POST): localhost:3000/api/products
router.post('/products', productController.createProduct);

// ==> 'Products': (GET): localhost:3000/api/products
router.get('/products', productController.listAllProducts);

// ==> 'Product': (GET): localhost:3000/api/products/:id
router.get('/products/:id', productController.findProductById);

// ==> 'Product': (PUT): localhost:3000/api/products/:id
router.put('/products/:id', productController.updateProductById);

// ==> Product': (DELETE): localhost:3000/api/products/:id
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;