const express = require('express');
const controller = require('../controllers/userController');
const { verifyToken } = require('../middlewares/validateToken');

const router = express.Router();
router.post('/', verifyToken, controller.createUser);
router.post('/userApi', verifyToken, controller.createUserApi);
router.get('/userApi', verifyToken, controller.getAllUserApi);

module.exports = router;