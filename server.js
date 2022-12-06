const express = require('express');
const routerWeb = require("./src/routers/web.router");
const app = express();
const PORT = 3000;

// cau hinh views
app.set('views', 'views');
// set view engine ejs
app.set('view engine', 'ejs');
//cau hinh static file
app.use(express.static('public'))

app.use('/', routerWeb);

app.listen(PORT, 'localhost', () => {
    console.log('Server running on port ' + PORT);
})
