const express = require('express');
const router = new express.Router();

const scanController = require('../controllers/scan');
const loginRequired = require('../middlewares/login');

router.get('/', scanController.index);

router.post('/api/scan/createScan', scanController.createScan);
router.get('/api/scan/showLinkScans', loginRequired, scanController.showLinkScans);
router.get('/api/scan/showQRScans', loginRequired, scanController.showQRScans);

module.exports = router;