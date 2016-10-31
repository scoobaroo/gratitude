var React = require("react");
var ReactDOM = require("react-dom");
var app = document.getElementById("app");
var list = require('./components/list.js');

console.log("app.js loaded");

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('app')
);

ReactDOM.render(
  <Form />,
  document.getElementById('app')
);
