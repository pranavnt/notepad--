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
    this.setState({ body: event.target.value });
    console.log(this.state);
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
