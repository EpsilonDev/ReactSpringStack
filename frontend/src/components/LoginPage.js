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


export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    this.setState({
      username: "oura.dbk@gmail.com",
      password: "ouahou123"
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const admin = {
      username: this.state.username,
      password: this.state.password
    };

    console.log(admin);

    axios.get("http://localhost:8080/clientByEmail/" + this.state.username)
      .then(res => {
        console.log(res.data);
        if (res.data == null) alert("Wrong username or password");
        else {
          if (res.data.password !== this.state.password) {
            alert("Email ou Mot de Passe incorrecte !");
          } else {
            this.props.login(res.data);
            alert("Bienvenu " + this.state.username +"!");
          }
          
        }
      });
  }

  render() {
    return (
      <div>
        <MDBContainer className="mt-5">
        <MDBRow center={true}>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={this.onSubmit}>
                  <p className="h4 text-center py-4 cyan-text App">
                    <MDBIcon
                      icon="user-circle"
                      size="2x"
                      className="cyan-text mb-2"
                    />
                    <br />
                    SE CONNECTER
                  </p>
                  <div className="cyan-text App">
                    <MDBInput
                      background
                      label="Email"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
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
                  </div>
                  <div className="text-center py-4 mt-3 App">
                    <MDBBtn color="cyan" type="submit">
                      Se Connecter
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
     
    );
  }
}


