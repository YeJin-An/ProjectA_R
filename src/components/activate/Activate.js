import axios from "axios";
import React, { Component } from "react";

class Activate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/notice/api/notices/").then((res) => {
      this.setState({ items: res.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.posts.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.content}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Activate;
