import React, { Component } from 'react'
import './Main.css';
import Articles from "../Articles/Articles"

//import kitten from process.env.PUBLIC_URL + "/assets/cat.jpg"

export class Main extends Component {
    render() {
        return (
            <main>
                <h2>Esto es el Main</h2>
                <img src={process.env.PUBLIC_URL + '/assets/cat.jpg'} alt=""/>
                <p>me voy a tomar un café</p>
                <Articles/>
            </main>
        )
    }
}

export default Main
