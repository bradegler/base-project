/** @jsx React.DOM */
'use strict';
var React = require('react');
var TaskList = require('./task-list');
var TaskForm = require('./task-form');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },  
  loadTasksFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("tasks", status, err.toString());
      }.bind(this)
    });
  },  
  handleTaskSubmit: function(task) {
    var tasks = this.state.data;
    var newtasks = tasks.concat([task]);
    this.setState({data: newtasks});    
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: task,
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    });
  },  
  componentWillMount: function() {
    this.loadTasksFromServer();
    setInterval(this.loadTasksFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="taskBox">
        <h1>Tasks</h1>
        <TaskList data={this.state.data}/>
        <TaskForm onTaskSubmit={this.handleTaskSubmit} />
    </div>
    );
  }
});