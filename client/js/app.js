'use strict';

var $ = require('jquery-browserify');
var React = require('react');
var director = require('director');
var TaskBox = require('./jsx/task-box');

var app = React.renderComponent(
  TaskBox({
    pollInterval: 20000
  }),
  document.getElementById('tasks'));