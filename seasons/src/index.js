import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //JS object constructor
  constructor(props) {
    super(props); //super is the React constructor
    // THIS IS THE ONLY TIME we do direct assignment to this.state!
    this.state = { lat: null }; //latitude

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude});
        console.log(position);
      },
      (err) => console.log(err)
    );
  }

  // React says we have to define render
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
