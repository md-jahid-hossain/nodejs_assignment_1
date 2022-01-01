const express = require('express');
const router = express.Router();

const validation = require('../middleware/validation');

const controller = require('../controllers/user.controllers');

const { registerSchema, profileSchema } = require('../schema/user.schema');

router.get('/api/users/', controller.getUsers);

router.get('/api/users/:id', controller.getUser);

router.post('/api/users/', validation(registerSchema), controller.createUser);

router.put('/api/users/:id', validation(profileSchema), controller.updateUser);

router.patch(
    '/api/users/:id',
    validation(profileSchema),
    controller.updateUserPartially
);

router.delete('/api/users/:id', controller.deleteUser);

module.exports = router;
