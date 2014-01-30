/** @jsx React.DOM */
'use strict';
var React = require('react');
var TaskList = require('./task-list');
var TaskForm = require('./task-form');
var TaskItem = require('../model/taskitem');
var TaskItemList = require('../model/taskitemlist');

module.exports = React.createClass({
  getInitialState: function() {
    return {collection: new TaskItemList()};
  },
  loadFromServer: function(){
    this.state.collection.fetch();
  }, 
  handleTaskSubmit: function(task) {
    var tasklist = this.state.collection;
    var taskitem = new TaskItem(task);
    tasklist.add(taskitem);
    taskitem.save();
  },  
  componentWillMount: function() {
    this.loadFromServer();
    setInterval(this.loadFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="taskBox">
        <h1>Tasks</h1>
        <TaskList collection={this.state.collection}/>
        <TaskForm onTaskSubmit={this.handleTaskSubmit} />
    </div>
    );
  }
});