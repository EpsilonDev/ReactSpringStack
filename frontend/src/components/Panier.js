import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Commande = props => (

  <tr>
    <td>{props.commande.client.email}</td>
    <td>{props.commande.numCommande}</td>
    <td>{props.commande.article.designation}</td>
    <td>{props.commande.dateCommande}</td>
    <td>{props.commande.qteCde}</td>
    <td>
      <a
        href="#"
        onClick={() => {
          props.deleteCommande(props.commande.numCommande);
        }}
      >
        <i className="far fa-trash-alt"></i>
      </a>
    </td>
    
    
  </tr>
);

class CommandePage extends Component {
  constructor(props) {
    super(props);

    this.deleteCommande = this.deleteCommande.bind(this);

    this.state = {
      commandes: [],
      article: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/commandesByClientId/" + this.props.user.idClient)
      .then(res => {
        this.setState({
          commandes: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteCommande(id) {
    axios
      .delete("http://localhost:8080/deleteCommande/" + id)
      .then(res => console.log(res.data));

    this.setState({
      commandes: this.state.commandes.filter(i => i.numCommande !== id)
    });
  }

  commandesList() {
    return this.state.commandes
      .map((currentCommande, i) => {
        return (
          <Commande
            commande={currentCommande}
            deleteCommande={this.deleteCommande}
            key={i}
          />
        );
      });
  }

  render() {
    return (
      <div className="container">
        <br></br>
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Email</th>
              <th>Num Commande</th>
              <th>Designation</th>
              <th>Date</th>
              <th>Quantité</th>
            </tr>
          </thead>
          <tbody>{this.commandesList()}</tbody>
        </table>
      </div>
      //</Router>
    );
  }
}

export default CommandePage;
