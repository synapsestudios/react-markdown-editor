global.__BACKEND__ = process.env.BACKEND;
global.__ENVIRONMENT__ = process.env.APP_ENV || 'development';
global.__HOSTNAME__ = process.env.HOST || 'localhost';

var path    = require('path');
var proxy   = require('express-http-proxy');
var express = require('express');
var request = require('request');
var webpack = require('webpack');
var config  = require('./webpack.config');
var url     = require('url');

var app = express();
var compiler = webpack(config);
var publicPath = config.output.publicPath;

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: publicPath,
  contentBase: path.resolve(__dirname, 'demo-build'),
  hot: true,
  quiet: false,
  noInfo: true,
  lazy: false,
  stats: true,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('', proxy('http://localhost'));

app.use(function (req, res, next) {
    var ext = path.extname(req.url);

    console.log('req.hostname', req.hostname);

    if ((ext === '' || ext === '.html') && req.url !== '/') {
        req.pipe(request('http://' + req.hostname + ':9001')).pipe(res);
    } else {
        next();
    }
});

app.listen(9001, function (err, result) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:9001');
});
