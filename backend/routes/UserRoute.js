const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/:id', userController.updateUser);

module.exports = router;