'use strict';

var http        = require('http');
var helmet      = require('helmet');
var express     = require('express')();
var compression = require('compression');

express.use(helmet());
express.use(compression());
express.use('/', function(req, res, cb) {
  res.send('Hello my friend');
  cb();
});

var env = process.env.NODE_ENV || 'development';
var props = require('./server.json')[env];
var server = http.Server(express);

server.listen(props.port, function() {
  console.log('SERVER:RUN');
});
