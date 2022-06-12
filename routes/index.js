const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');


const routerApi = app => {
    const router = express.Router();

    app.use('/', (req, res ) => {
        res.send('<h1>Bsale test api</h1>');
        res.json({
            message: 'Bsale test api',
            status: 'ok',
            version: '1.0.0',
        })
    })

    app.use('/api/v1', router);

    router.use('/products', productsRouter);
    router.use('/categories', categoriesRouter);
};

module.exports = routerApi;