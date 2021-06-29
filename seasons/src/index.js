import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //JS object constructor
  constructor(props) {
    super(props); //super is the React constructor
    // THIS IS THE ONLY TIME we do direct assignment to this.state!
    // setState must be used in other cases.
    this.state = { lat: null, errorMessage: "" }; //latitude

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
        console.log(position);
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidMount() {
    console.log("My component was rendered to the screen");
  }

  componentDidUpdate() {
    console.log("My component was just updated - it rerendered!");
  }

  // React says we have to define render
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
