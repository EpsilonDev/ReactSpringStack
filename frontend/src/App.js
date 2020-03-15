import React, { Component } from "react";
import LoginPage from "./components/LoginPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import SignUpPage from "./components/SignUpPage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      connected: false,
      user: null
    };
  }

  testlogin() {
    if (this.state.connected)
      return (
        <Home
          user={this.state.user}
          logout={() => {
            this.setState({ connected: false });
          }}
        />
      );
    else
      return (
        <div>
          <LoginPage
            login={user => {
              this.setState({ connected: true, user: user });
            }}
          />
          <SignUpPage></SignUpPage>
        </div>
        
      );
  }

  render() {
    return (
      <div>
        {this.testlogin()}
      </div>
    );
  }
}

export default App;
