import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { MDBIcon } from 'mdbreact';


class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a href="#" className="navbar-brand" style={{fontFamily:'Montserrat',color:"cyan"}}>My Shop</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav" >
                            <li className="nav-item ">
                                <Link to="/" className="nav-link App"><div style={{color:"cyan"}}>Articles</div></Link>
                            </li>                            
                
                        </ul>
                    </div>
                        <span className="navbar-text">
                            <Link to="/panier" className="nav-link App"><div style={{color:"cyan"}}><MDBIcon icon="shopping-basket" size="2x" /></div></Link>
                            </span>
                            <span className="navbar-text">
                            <div style={{color:"red"}}><MDBIcon onClick={this.props.logout} size="2x" icon="sign-out-alt" /></div>
                        </span>
                </nav>
            </div>
        )
    }
}


export default NavBar;