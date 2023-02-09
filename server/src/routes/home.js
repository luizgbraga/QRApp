const express = require('express');
const router = new express.Router();

const homeController = require('../controllers/home');

router.get('/', homeController.index);
router.get('/api/qr/showAll', homeController.showAll);
router.get('/api/qr/showQR', homeController.showQR);
router.get('/api/qr/showScans', homeController.showScans);
router.post('/api/qr/createQR', homeController.createQR);
router.delete('/api/qr/deleteQR', homeController.deleteQR);
router.put('/api/qr/updateScans', homeController.updateScans);
router.put('/api/qr/createLink', homeController.createLink);
router.put('/api/qr/updateLink', homeController.updateLink);

module.exports = router;