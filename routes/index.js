const router = require('express').Router();
const userRoutes = require('./userRoutes')
const shopRoutes = require('./shopRoutes')
const productRoutes = require('./productRoutes')
const authRoutes = require('./authRoutes');

router
    .use('/auth', authRoutes)
    .use('/user', userRoutes)
    .use('/product', productRoutes)
    .use('/shop', shopRoutes)

module.exports = router;