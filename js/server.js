var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config');

var app = express();
app.set('port',(process.env.PORT || 3000));
app.set('/static',express.static('css'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.get('/',function(req,res,next){
    res.send('Conectando...');
});

app.listen(app.get('port'),()=>{
    console.log('Servidor activo');
})