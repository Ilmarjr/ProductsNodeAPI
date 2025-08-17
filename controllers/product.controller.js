const Product = require('../models/product.model.js');
const catchAsync = require('../utils/catchAsync');

// Get all products
async function getAllProducts(req, res) {
        const { page = 1, limit = 10 } = req.query;

        const products = await Product.find({})
            .skip((page - 1) * limit)
            .limit(Number(limit))
            .lean();

        const total = await Product.countDocuments();

        res.status(200).json({
            page: Number(page),
            limit: Number(limit),
            total,
            products
        });
}

// Get a single product by ID
async function getProductById(req, res) {
        const { id } = req.params;
        const product = await Product.findById(id).lean();

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
}

// Create a new product
async function createProduct(req, res) {
        const product = await Product.create(req.body);
        res.status(201).json(product)
}

// Update a product by ID
async function updateProduct(req, res) {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true }).lean();

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
}

// Delete a product by ID
async function deleteProduct(req, res) {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id).lean();

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
}

// Exportando
module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};