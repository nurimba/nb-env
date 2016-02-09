'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var nodeInstance;

gulp.task('nodemon', function () {
  return nodemon({
    script: 'server.js',
    ext: 'html js css json',
    tasks: [],
    ignore: [],
    env: { 'NODE_ENV': 'development' }
  });
});
