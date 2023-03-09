const express = require('express');
const router = new express.Router();

const subscriptionController = require('../controllers/subscription');
const loginRequired = require('../middlewares/login');

router.get('/', subscriptionController.index);

router.post('/api/qr/createSubscription', subscriptionController.createSubscription);
router.put('/api/qr/updateSubscription', loginRequired, subscriptionController.updateSubscription);

module.exports = router;