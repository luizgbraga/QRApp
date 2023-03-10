const express = require('express');
const router = new express.Router();

const productController = require('../controllers/product');

router.get('/', productController.index);

module.exports = router;