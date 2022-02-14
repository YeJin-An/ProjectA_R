import React from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App";
import { Provider } from "react-redux";
import store from "./lib/store";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
