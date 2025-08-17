const express = require('express');
const router = express.Router();
const {getAllProducts, getProductById} = require('../controllers/product.controller.js');
const {createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');


router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;