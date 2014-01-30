/** @jsx React.DOM */
'use strict';

var React = require('react');

module.exports = React.createClass({
  handleSubmit: function() {
    var author = this.refs.author.getDOMNode().value.trim();
    var title = this.refs.title.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();
    this.props.onTaskSubmit({author: author, title: title, text: text});
    
    this.refs.author.getDOMNode().value = '';
    this.refs.title.getDOMNode().value = '';
    this.refs.text.getDOMNode().value = '';
    return false;
  },
  render: function() {
    return (
      <form className="taskForm" onSubmit={this.handleSubmit}>
        <input type="author" placeholder="Author" ref="author" />
        <input type="text" placeholder="Title" ref="title" />
        <textarea placeholder="Details" ref="text"></textarea>
        <button type="submit">Post</button>
      </form>
    );
  }
});