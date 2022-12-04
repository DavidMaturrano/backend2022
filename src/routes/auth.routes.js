const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//Login
router.post('/login', authController.authLogin);

module.exports = router;
