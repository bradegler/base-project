/** @jsx React.DOM */
'use strict';
var React = require('react');
var Showdown = require('showdown');
var converter = new Showdown.converter();


module.exports = React.createClass({
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});