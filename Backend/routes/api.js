const express = require('express');
const scamDetectionController = require('../controllers/scamDetection');
const reportController = require('../controllers/reportController');
const userController = require('../controllers/userController');
const adminController = require('../controllers/adminController');

const router = express.Router();

// Scam Detection
router.post('/detect-scam', scamDetectionController.calculateRisk);

// Report Routes
router.post('/reports', reportController.submitReport); 

// User Routes
router.post('/users/register', userController.registerUser);
router.post('/users/login', userController.loginUser); 

// Admin Routes
router.get('/admin/reports', adminController.getPendingReports);
router.put('/admin/reports/:reportId/approve', adminController.approveReport);
router.put('/admin/reports/:reportId/reject', adminController.rejectReport);

module.exports = router;