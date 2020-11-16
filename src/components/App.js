import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      body: "Welcome to Notepad-- :D",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var writtenText = event.target.value;

    var state = event.target.value;

    if (writtenText.substring(writtenText.length - 1) == " ") {
      var words = writtenText.split(" ").filter(function (value, index, arr) {
        return value != "";
      });

      let lastWord = words[words.length - 1];

      if (lastWord.length > 2) {
        words[words.length - 1] = lastWord.substring(0, lastWord.length - 2);

        state = "";

        for (var i = 0; i < words.length; i++) {
          state += words[i] + " ";
        }
      }
      this.setState({ body: state });
    } else {
      this.setState({ body: event.target.value });
    }
  }

  render() {
    return (
      <div>
        <h1>Notepad--</h1>

        <textarea
          id="text"
          value={this.state.body}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
