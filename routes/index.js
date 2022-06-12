const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');


const routerApi = app => {
    const router = express.Router();

    app.use('/', (req, res ) => {
        res.send('Hello World');
    })

    app.use('/api/v1', router);

    router.use('/products', productsRouter);
    router.use('/categories', categoriesRouter);
};

module.exports = routerApi;