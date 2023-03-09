const express = require('express');
const router = new express.Router();

const linkController = require('../controllers/link');
const loginRequired = require('../middlewares/login');

router.get('/', linkController.index);

router.post('/api/link/createLink', loginRequired, linkController.createLink);
router.get('/api/link/showQRLinks', linkController.showQRLinks);
router.put('/api/link/updateLink', loginRequired, linkController.updateLink);
router.delete('/api/link/deleteLink', loginRequired, linkController.deleteLink);

module.exports = router;