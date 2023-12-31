// routes/user.js

const express = require('express');
const router = express.Router();

// Import necessary controllers
const userController = require('../controllers/userController');

// Define routes for user section

// User dashboard
router.get('/dashboard', userController.dashboard);

// User login
router.get('/login', userController.loginForm);
router.post('/login', userController.login);

// View SOCKS
router.get('/socks', userController.viewSocks);

// View credits
router.get('/credits', userController.viewCredits);

// View gift codes
router.get('/giftcodes', userController.viewGiftCodes);

// Make a payment
router.get('/payment', userController.makePayment);

// View available plans
router.get('/plans', userController.viewPlans);

// View categories
router.get('/categories', userController.viewCategories);

// View items
router.get('/items', userController.viewItems);

// Other user-related routes...

module.exports = router;
