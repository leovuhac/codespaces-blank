// routes/admin.js

const express = require('express');
const router = express.Router();

// Import necessary controllers
const adminController = require('../controllers/adminController');

// Define routes for admin section

// Admin dashboard
router.get('/dashboard', adminController.dashboard);

// Admin login
router.get('/login', adminController.loginForm);
router.post('/login', adminController.login);

// Manage SOCKS
router.get('/socks', adminController.manageSocks);

// Manage members
router.get('/members', adminController.manageMembers);

// Manage credits
router.get('/credits', adminController.manageCredits);

// Manage API settings
router.get('/api', adminController.manageApi);

// Manage gift codes
router.get('/giftcodes', adminController.manageGiftCodes);

// Manage site settings
router.get('/site-settings', adminController.manageSiteSettings);

// Manage payments
router.get('/payment', adminController.managePayments);

// Manage plans
router.get('/plans', adminController.managePlans);

// Manage categories
router.get('/categories', adminController.manageCategories);

// Manage items
router.get('/items', adminController.manageItems);

// Check SOCKS status
router.get('/check-socks', adminController.checkSocks);

// View revenue statistics
router.get('/revenue-stats', adminController.viewRevenueStats);

// Remote API management
router.get('/remote-api', adminController.remoteApi);

// Other admin-related routes...

module.exports = router;
