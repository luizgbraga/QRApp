const express = require('express');
const router = new express.Router();

const qrController = require('../controllers/qr');
const loginRequired = require('../middlewares/login');

router.get('/', qrController.index);

router.post('/api/qr/createQR', loginRequired, qrController.createQR);
router.get('/api/qr/showUserQRs', loginRequired, qrController.showUserQRs);
router.get('/api/qr/showQR', loginRequired, qrController.showQR);
router.put('/api/qr/updateQR', loginRequired, qrController.updateQR);
router.delete('/api/qr/deleteQR', loginRequired, qrController.deleteQR);

module.exports = router;