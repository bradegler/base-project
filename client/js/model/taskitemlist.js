'use strict';

var Backbone = require('backbone');
var $ = require('jquery-browserify');
Backbone.$ = $;

var TaskItem = require('./taskitem');

module.exports = Backbone.Collection.extend({
  model: TaskItem,
  url: '/api/task'
});