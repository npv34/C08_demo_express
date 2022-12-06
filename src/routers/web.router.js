const express = require('express');
const ProductController = require("../controllers/product.controller");

const routerWeb = express.Router();

let productController = new ProductController()

routerWeb.get('/', (req, res) => {
    let user = {
        id: 1,
        name: 'John',
    }

    res.render('home', {data: user})
});

routerWeb.get('/users/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    res.end()
});

routerWeb.get('/products', (req, res) => {
    productController.index(req, res).catch((err) => {
        console.log(err)
    })
})

routerWeb.get('/products/:id/delete', (req, res) => {
    productController.destroy(req, res).catch((err) => {
        console.log(err)
    })
})

routerWeb.get('/products/:id/edit', (req, res) => {
    productController.showFormEdit(req, res).catch((err) => {
        console.log(err)
    })
})


module.exports = routerWeb
