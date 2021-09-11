import React from "react";
import ReactDOM from "react-dom";
import marked from "marked";

class App extends React.Component {
  state = {
    output: marked("# e"),
    newText: "",
  };

  createMarkup(text) {
    return {
      __html: text,
    };
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ newText: value });
    this.setState({ output: marked(value) });
  }

  render() {
    return (
      <div>
        <h1>Markdown</h1>
        <textarea
          onChange={this.handleChange.bind(this)}
          placeholder="ee"
          value={this.state.newText}
        ></textarea>
        <div
          dangerouslySetInnerHTML={this.createMarkup(this.state.output)}
        ></div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
