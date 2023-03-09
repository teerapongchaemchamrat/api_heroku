'use strict';

const express = require('express');
const eventControll = require('../controllers/eventController');
const router = express.Router();

router.get('/product', eventControll.getAllProduct);
router.post('/add', eventControll.addProduct);



module.exports = {
    routes: router
}