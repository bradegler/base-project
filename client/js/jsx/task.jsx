/** @jsx React.DOM */
'use strict';
var React = require('react');
var Showdown = require('showdown');
var converter = new Showdown.converter();


module.exports = React.createClass({
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div key={this.props.key} className="task">
        <h2 className="taskAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});