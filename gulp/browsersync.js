'use strict';

var gulp = require('gulp');
var props = require('../server.json')['development'];
var browserSync = require('browser-sync');

gulp.task('browsersync', ['nodemon'], function () {
  browserSync.instance = browserSync.init({
    startPath: '/',
    browser: 'default',
    proxy: {
      target: "http://localhost:".concat(props.port)
    }
  });
});
