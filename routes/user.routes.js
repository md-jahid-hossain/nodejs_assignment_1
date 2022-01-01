const express = require('express');
const router = express.Router();

const validation = require('../middleware/validation');

const controller = require('../controllers/user.controllers');

const { registerSchema, profileSchema } = require('../schema/user.schema');

router.get('/', controller.getUsers);

router.get('/:id', controller.getUser);

router.post('/', validation(registerSchema), controller.createUser);

router.put('/:id', validation(profileSchema), controller.updateUser);

router.patch('/:id', validation(profileSchema), controller.updateUserPartially);

router.delete('/:id', controller.deleteUser);

module.exports = router;
