import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  //JS object constructor
  constructor(props) {
    super(props); //super is the React constructor
    // THIS IS THE ONLY TIME we do direct assignment to this.state!
    // setState must be used in other cases.
    this.state = { lat: null, errorMessage: "" }; //lat==latitude
  }

  /**
   * Alternative way to implement constructor
   * Here the Babel will create the contructor according
   * to the state initialized
   */
  //state = { lat: null, errorMessage: "" };

  componentDidMount() {
    console.log("My component was rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("My component was just updated - it rerendered!");
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message='Please accept location request' />;
  }

  // React says we have to define render
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
