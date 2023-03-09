'use strict';

const eventData = require('../data/events');

const getAllProduct = async (req, res, next) => {
    try {
        const getlist = await eventData.getProduct();
        res.send(getlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addProduct = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await eventData.creatProduct(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllProduct,
    addProduct
}