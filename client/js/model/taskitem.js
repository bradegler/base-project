'use strict';

var Backbone = require('backbone');
var $ = require('jquery-browserify');
Backbone.$ = $;

module.exports=Backbone.Model.extend({
  idAttribute: 'key',
  url: '/api/task',
  initialize: function(){}
});