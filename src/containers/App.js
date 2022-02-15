import Base from "antd/lib/typography/Base";
import Footer from "components/Footer";
import Navigation from "components/Navigation";
import NoticeList from "components/notice/NoticeList";
import NoticeTable from "components/notice/NoticeTable";
import Hello from "containers/Hello";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Hello />
        <Footer />
      </div>
    );
  }
}

export default App;
