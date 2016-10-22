var React = require("react");
var ReactDOM = require("react-dom");
var app = document.getElementById("app");

console.log("app.js loaded");

var User = React.createClass({
  render() {
    return <div>
        <h1>City: {this.props.user.city} </h1>
        <UserName name={this.props.user.name} />
      </div>;
  }
});
// tutorial1.js
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

var user = { name: 'John', city: 'San Francisco' };
ReactDOM.render(<User user={user} />, app);
