import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ArticlesPage from "./Articles.js";
import Panier from "./Panier";


class Home extends Component {
  state = {};
  render() {
    return (
      <Router>

        <NavBar logout={this.props.logout}></NavBar>
        
        <Route path="/" exact component={() => <ArticlesPage user={this.props.user}></ArticlesPage>}></Route>
        <Route path="/panier" component={() => <Panier user={this.props.user}></Panier>}></Route>
        <br></br>

    </Router>
    );
  }
}

export default Home;
