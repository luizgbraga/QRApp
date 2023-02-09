const express = require('express');
const router = new express.Router();

const loginController = require('../controllers/login');

router.get('/api/login/showAll', loginController.showAll);
router.post('/api/login/createUser', loginController.createUser);
router.delete('/api/login/deleteUser', loginController.deleteUser);

module.exports = router;