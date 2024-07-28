const express = require('express');
const userRouter = require('./users.Routers');
const router = express.Router();

// colocar las rutas aquí
router.use('/users',userRouter)

module.exports = router;