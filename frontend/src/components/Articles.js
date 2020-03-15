import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBIcon,
  MDBCardText
} from "mdbreact";

const Article = props => (
  <div style={{ float: "left", margin: "20px" }} className="App">
    <MDBCard style={{ width: "300px", height: "500px" }}>
      <MDBCardImage
        top
        src={props.article.photo}
        waves
      />
      <MDBCardBody>
    <MDBCardTitle className="card-title">{props.article.designation}</MDBCardTitle>
    <div style={{ color: "teal", textAlign: "left" }}>{props.article.description}</div>
        {
          <div>
            <MDBCardText style={{ textAlign: "center" }}>
            {
          <div>
            <MDBCardText style={{ textAlign: "left" }}>
                Categorie: {props.article.categorie.nomCategorie}
            </MDBCardText>
            <MDBCardText style={{ textAlign: "left" }}>
                {props.article.stock}
            </MDBCardText>
            <MDBCardText style={{ textAlign: "right" }}>
               Prix: {props.article.prix}$
            </MDBCardText>
          </div>
            }
            </MDBCardText>
          </div>
        }
      </MDBCardBody>
        <button className="d-inline"
          type="button"
          style={{
            marginRight: "30px",
            marginBottom: "20px",
            width: "80px",
            borderRadius: "40px"
          }}
          className="btn btn-primary btn-sm float-right btn-mr-4 btn-mb-4"
          onClick={() => props.onClickAddCommande(props.article)}
        >
          <MDBIcon icon="plus" />
        </button>
    </MDBCard>
  </div>
);

export class ArticlesPage extends Component {
  constructor(props) {
    super(props);

    this.onClickAddCommande = this.onClickAddCommande.bind(this);

    this.state = {
        articles: [],
        categorie: []
    };
  }

  componentDidMount() {

    axios
        .get("http://localhost:8080/articles")
        .then(res => {
            this.setState({
            articles: res.data
        });
        })
    .catch(err => {
      console.log(err);
    });

    axios
      .get("http://localhost:8080/categories/")
      .then(res => {
        this.setState({
          categorie: res.data
        });
        console.log(this.state.categorie);
      })
      .catch(err => {
        console.log(err);
      });

  }

  articlesList() {
      return this.state.articles.map((currentArticle, i) => {
          return(
              <Article
                article={currentArticle}
                key={i}
                categorie={this.state.categorie}
                onClickAddCommande={this.onClickAddCommande}
                user={this.props.user}
              />
          );
      })

  }

  onClickAddCommande(article) {
    const commande = {
      dateCommande: Date.now(),
      qteCde: 1,
      article: article,
      client: this.props.user
      
    }
    console.log(commande);

    axios
      .post("http://localhost:8080/addCommande", commande)
      .then(res => alert(res.data))
      .catch(() => alert("Erreur d'ajout !"));
        console.log("Commande enregistré !");
        //alert("Commande enregistré !")
  }

  render() {
    return (
      <div className="container">
        <br></br>
        {this.articlesList()}
      </div>
    );
  }
}

export default ArticlesPage;
