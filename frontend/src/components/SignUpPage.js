import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";


export default class SignUpPage extends Component {

    constructor(props) {

        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeAdresse = this.onChangeAdresse.bind(this);
        this.onChangeVille = this.onChangeVille.bind(this);
        this.onChangeTelephone = this.onChangeTelephone.bind(this);
        this.onChangeCodePostal = this.onChangeCodePostal.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email:"",
            nom: "",
            prenom: "",
            password: "",
            telephone: "",
            adresse: "",
            ville: "",
            codePostal: ""

        };
    }

    onChangeCodePostal(e) {
        this.setState({
            codePostal: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeNom(e) {
        this.setState({
            nom: e.target.value
        });
    }

    onChangePrenom(e) {
        this.setState({
            prenom: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeTelephone(e) {
        this.setState({
            telephone: e.target.value
        });
    }

    onChangeAdresse(e) {
        this.setState({
            adresse: e.target.value
        });
    }

    onChangeVille(e) {
        this.setState({
            ville: e.target.value
        });
    }

    clear() {
        this.setState({
            email:"",
            nom: "",
            prenom: "",
            password: "",
            telephone: "",
            adresse: "",
            ville: "",
            codePostal: ""
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const client = {
          "email": this.state.email,
          "password": this.state.password,
          "nom": this.state.nom,
          "prenom": this.state.prenom,
          "adresse": this.state.adresse,
          "ville": this.state.ville,
          "telephone": this.state.telephone,
          "codePostal": this.state.codePostal
        }

        console.log(client)

        axios
            .post("http://localhost:8080/addClient", client)
            .then(res => alert(res.data))
            .catch(() => alert("Erreur d'ajout !"));
        alert("client enregistré !")
        this.clear();
    }

    

  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow center={true}>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form >
                  <p className="h4 text-center py-4 purple-text App">
                    <MDBIcon
                      icon="sign-in-alt"
                      size="2x"
                      className="purple-text mb-2"
                    />
                    <br />
                    S'Inscrire
                  </p>
                  <div className="purple-text App">
                  <MDBInput
                      background
                      label="Nom"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.nom}
                      onChange={this.onChangeNom}
                    />
                  <MDBInput
                      background
                      label="Prenom"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.prenom}
                      onChange={this.onChangePrenom}
                    />
                    <MDBInput
                      background
                      label="Email"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                    />
                    <MDBInput
                      background
                      label="Mot de passe"
                      group
                      type="password"
                      validate
                      value={this.state.password}
                      onChange={this.onChangePassword}
                    />
                    <MDBInput
                      background
                      label="Telephone"
                      group
                      type="tel"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.telephone}
                      onChange={this.onChangeTelephone}
                    />
                    <MDBInput
                      background
                      label="Adresse"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.adresse}
                      onChange={this.onChangeAdresse}
                    />
                    <MDBInput
                      background
                      label="Ville"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.ville}
                      onChange={this.onChangeVille}
                    />
                    <MDBInput
                      background
                      label="Code Postal"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.codePostal}
                      onChange={this.onChangeCodePostal}
                    />

                  </div>
                  <div className="text-center py-4 mt-3 App">
                    <MDBBtn color="purple" type="submit" onClick={this.onSubmit}>
                      S'Incrire
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}


