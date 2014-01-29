/** @jsx React.DOM */
'use strict';
var React = require('react');
var Task = require('./task');

module.exports = React.createClass({
  render: function() {
    var taskNodes = this.props.data.map(function (task) {
      return <Task author={task.author}>{task.text}</Task>;
    });    
    return (
      <div className="taskList">
        {taskNodes}
      </div>
    );
  }
});