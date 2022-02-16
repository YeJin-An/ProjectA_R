import Activate from "components/activate/Activate";
import Footer from "components/Footer";
import Navigation from "components/Navigation";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Activate />
        <Footer />
      </div>
    );
  }
}

export default App;
