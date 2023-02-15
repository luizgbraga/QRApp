const express = require('express');
const router = new express.Router();

const loginController = require('../controllers/login');

const loginRequired = require('../middlewares/login');

// router.get('/api/login/showAll', loginController.showAll);
router.post('/api/login/createUser', loginController.createUser);
router.post('/api/login/logUser', loginController.logUser);
router.get('/api/login/getUser', loginRequired, loginController.getUser);
router.put('/api/login/updatePlan', loginController.updatePlan);
router.delete('/api/login/deleteUser', loginRequired, loginController.deleteUser);

module.exports = router;