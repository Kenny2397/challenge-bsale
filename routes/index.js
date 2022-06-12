const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');


const routerApi = app => {
    const router = express.Router();

    app.use('/', (req, res ) => {
        res.send(`
        <h1>Bsale test api</h1>

        <p>message: Bsale test api is running</p>
        <p>version: 1.0.0</p>
        <p>author: Kenny Luque</p>
        <p>email:kenny.luque.t@uni.pe </p>

        `);
        
    })

    app.use('/api/v1', router);

    router.use('/products', productsRouter);
    router.use('/categories', categoriesRouter);
};

module.exports = routerApi;