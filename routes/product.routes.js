const express = require('express');
const router = express.Router();

const {
    productCreateSchema,
    productUpdateSchema,
} = require('../schema/product.schema');

const controller = require('../controllers/product.controllers');

const validation = require('../middleware/validation');

router.get('/', controller.getProducts);

router.get('/:id', controller.getProduct);

router.post('/', validation(productCreateSchema), controller.createProduct);

router.put('/:id', validation(productCreateSchema), controller.updateProduct);

router.patch('/:id', validation(productUpdateSchema), controller.updateProductQuantity);

router.delete('/:id', controller.deleteProduct);

router.patch('/rating/:id', validation(productUpdateSchema), controller.setRating);

module.exports = router;
