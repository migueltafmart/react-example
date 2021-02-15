import React, { Component } from "react";
import Article from "../Article/Article";
import Button from '@material-ui/core/Button';

class Articles extends Component {
  constructor(props){
    super(props);
    this.state= {
      nombre: "Miguel",
      age: 25,
      nombres: []
    }
  }
  dameHora = () => `${new Date().getUTCHours() + 1}:${new Date().getUTCMinutes()}`;
  
  alarm = () => {
    let nombre = prompt("Introduce tu nombre");
    let age = prompt("Inttroduce tu edad");
    this.setState({"nombre": nombre , "age":age});
    this.setState({nombres:[...this.state.nombres, nombre]})
  }
  paint = () => {
    return this.state.nombres.map((n, i) => <Article nombre={n} key={i} name={n}/>)
  }
  render() {
    
    return <section>
      Articles {this.dameHora()}
      <Article nombre={this.state.nombre}/>
      
      <Button onClick={this.alarm} variant="contained" color="secondary">
        Púlsame
      </Button>
      {this.paint()}
    </section>;
  }
}

export default Articles;
