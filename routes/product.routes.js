const express = require('express');
const router = express.Router();

const {
    productCreateSchema,
    productUpdateSchema,
} = require('../schema/product.schema');

const controller = require('../controllers/product.controllers');

const validation = require('../middleware/validation');

router.get('/api/products/', controller.getProducts);

router.get('/api/products/:id', controller.getProduct);

router.post(
    '/api/products/',
    validation(productCreateSchema),
    controller.createProduct
);

router.put(
    '/api/products/:id',
    validation(productCreateSchema),
    controller.updateProduct
);

router.patch(
    '/api/products/:id',
    validation(productUpdateSchema),
    controller.updateProductQuantity
);

router.delete('/api/products/:id', controller.deleteProduct);

router.patch(
    '/api/products/rating/:id',
    validation(productUpdateSchema),
    controller.setRating
);

module.exports = router;
