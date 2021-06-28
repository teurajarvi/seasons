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

  // React says we have to define render
  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br></br>
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
