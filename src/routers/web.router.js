const express = require('express');

const routerWeb = express.Router();

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

module.exports = routerWeb
