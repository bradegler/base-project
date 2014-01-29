'use strict';

var $ = require('jquery-browserify');
var React = require('react');
var TaskBox = require('./jsx/task-box');
var CommentBox = require('./jsx/comment-box');


var app = React.renderComponent(
  CommentBox({
    url: '/api/comment',
    pollInterval: 2000
  }),
  document.getElementById('comments'));

var app = React.renderComponent(
  TaskBox({
    url: '/api/task',
    pollInterval: 2000
  }),
  document.getElementById('tasks'));