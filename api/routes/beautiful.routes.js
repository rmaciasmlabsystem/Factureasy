const express = require('express');
const controller = require('../controllers/beautifulController');
const { verifySecretKey } = require('../middlewares/validateToken');

const router = express.Router();
router.post('/', verifySecretKey, controller.createBeautiful); // cargar nuevo xml
/* router.get('/', verifySecretKey, controller.getAll); // obtener todos
router.get('/:id', verifySecretKey, controller.getById); // obter un cfdi
router.delete('/id', verifySecretKey, controller.deleteById) */

module.exports = router;
