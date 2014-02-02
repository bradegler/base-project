/** @jsx React.DOM */
'use strict';
var React = require('react');
var Showdown = require('showdown');
var converter = new Showdown.converter();

module.exports = React.createClass({
  render: function() {
    var rawMarkup = this.props.children ? converter.makeHtml(this.props.children.toString()) : '';
    return (
      <div key={this.props.id} className="task">
        <h2 className="taskTitle">
          {this.props.title}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});