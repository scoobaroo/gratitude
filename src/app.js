/* jshint esversion: 6 */
var React = require("react");
var ReactDOM = require("react-dom");
var app = document.getElementById("app");

console.log("app.js loaded");

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Gratitude List</h1>
        Hello, world! I am a CommentBox.
        <Form />
      </div>
    );
  }
});

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value1: '', value2: '', value3:'', value4 : '', value5:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // Note: with uncontrolled inputs, you don't
    // have to put the value in the state.
    this.setState({value1: event.target.value1,
                   value2: event.target.value2,
                   value3: event.target.value3,
                   value4: event.target.value4,
                   value5: event.target.value5
                 });
  }

  handleSubmit(event) {
    alert('Text field value1 is: ' + this.state.value1 +
          'Text field value2 is: ' + this.state.value2 +
          'Text field value3 is: ' + this.state.value3 +
          'Text field value4 is: ' + this.state.value4 +
          'Text field value5 is: ' + this.state.value5);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Gratitude List Item 1!"
          onChange={this.handleChange} />
        <input
          type="text"
          placeholder="Gratitude List Item 2!"
          onChange={this.handleChange} />
        <input
          type="text"
          placeholder="Gratitude List Item 3!"
          onChange={this.handleChange} />
        <input
          type="text"
          placeholder="Gratitude List Item 4!"
          onChange={this.handleChange} />
        <input
          type="text"
          placeholder="Gratitude List Item 5!"
          onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <CommentBox />,
  document.getElementById('app')
);
