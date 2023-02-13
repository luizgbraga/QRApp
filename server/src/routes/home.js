const express = require('express');
const router = new express.Router();

const homeController = require('../controllers/home');

const loginRequired = require('../middlewares/login');

router.get('/', homeController.index);
// router.get('/api/qr/showAll', homeController.showAll);

//  ** All QR Code related routes **

router.post('/api/qr/createQR', loginRequired, homeController.createQR);
router.get('/api/qr/showUserQR', loginRequired, homeController.showUserQR);
router.get('/api/qr/showQR', homeController.showQR);
router.put('/api/qr/updateQR', homeController.updateQR);
router.delete('/api/qr/deleteQR', homeController.deleteQR);

//  ** All Links related routes **

router.put('/api/qr/createLink', homeController.createLink);
router.put('/api/qr/updateLink', homeController.updateLink);

//  ** All Scans related routes **

router.get('/api/qr/showScans', homeController.showScans);
router.put('/api/qr/updateScans', homeController.updateScans);


module.exports = router;