import Footer from "components/Footer";
import Navigation from "components/Navigation";
import NoticeList from "components/notice/NoticeList";
import NoticeTable from "components/notice/NoticeTable";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <NoticeList />
        <Footer />
      </div>
    );
  }
}

export default App;
