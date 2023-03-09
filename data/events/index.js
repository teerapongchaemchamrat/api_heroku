'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getProduct = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const getList = await pool.request().query(sqlQueries.getProduct);
        return getList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const creatProduct = async (eventdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertProduct = await pool.request()
                            .input('productName', sql.NVarChar(100), eventdata.productName)
                            .input('price', sql.Int, eventdata.price)
                            .query(sqlQueries.createProduct);                            
        return insertProduct.recordset;
    } catch (error) {
        return error.message;
    }
}



module.exports = {
    getProduct,
    creatProduct
}