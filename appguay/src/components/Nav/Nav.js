import "./Nav.scss"
import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <nav className={this.props.class}>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Sobre Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
