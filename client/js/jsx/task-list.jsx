/** @jsx React.DOM */
'use strict';
var React = require('react');
var Task = require('./task');
var BackboneMixin = require('./backbonemixin');

module.exports = React.createClass({
  mixins: [BackboneMixin],
  render: function() {
    var taskNodes = this.props.collection.map(function (taskitem) {
      return <Task id={taskitem.attributes._id} title={taskitem.attributes.title}>{taskitem.attributes.text}</Task>;
    });    
    return (
      <div className="taskList">
        {taskNodes}
      </div>
    );
  }
});