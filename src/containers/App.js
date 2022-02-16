import ActivateList from "components/activate/Activate";
import Footer from "components/Footer";
import Navigation from "components/Navigation";
import NoticeList from "components/notice/NoticeList";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <ActivateList />
        <Footer />
      </div>
    );
  }
}

export default App;
