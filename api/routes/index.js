const { Router } = require('express');
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const beautifulRoutes = require('./beautiful.routes');

const router = Router();
router.use('/api/v1/login', authRoutes);
router.use('/api/v1/user', userRoutes);
router.use('/api/v1/beautiful', beautifulRoutes);

module.exports = router;
