import axios from "axios";
import React from "react";

class Hello extends React.Component {
  state = { details: [] };

  componentDidMount() {
    let data;
    axios
      .get("http://127.0.0.1:8000/notice/api/notices/")
      .then((res) => {
        data = res.data;
        this.setState({
          detailes: data,
        });
      })
      .catch((err) => {});
  }
  render() {
    return (
      <div>
        <header>Data Generated From Django</header>
        <hr></hr>
        {this.state.details.map((output, id) => (
          <div key={id}>
            <h3>{output.id}</h3>
            <h3>{output.title}</h3>
            <h3>{output.content}</h3>
            <h3>{output.created_at}</h3>
            <h3>{output.user}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default Hello;
