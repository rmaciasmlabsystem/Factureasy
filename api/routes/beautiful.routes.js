const express = require('express');
const multer = require('multer');
const controller = require('../controllers/beautifulController');
const { verifySecretKey } = require('../middlewares/validateToken');
const { processFile } = require('../middlewares/fileHandler');
const upload = multer({ dest: './newUploads' });

const router = express.Router();
router.post('/', verifySecretKey, upload.single('file'), processFile, controller.createBeautiful);
/* router.get('/', verifySecretKey, controller.getAll); // obtener todos
router.get('/:id', verifySecretKey, controller.getById); // obter un cfdi
router.delete('/id', verifySecretKey, controller.deleteById) */

module.exports = router;