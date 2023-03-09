const express = require('express');
const router = new express.Router();

const transactionController = require('../controllers/transaction');

router.get('/', transactionController.index);

router.post('/api/qr/createTransaction', transactionController.createTransaction);

module.exports = router;