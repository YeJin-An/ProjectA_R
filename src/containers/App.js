import LoginForm from "components/accounts/LoginForm";
import SignupForm from "components/accounts/SignupForm";
import Footer from "components/Footer";
import Navigation from "components/Navigation";
import PageUser from "pages/user/PageUser";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <SignupForm />
        <Footer />
      </div>
    );
  }
}

export default App;
