import "./Head.scss"
import React, { Component } from 'react'
//rce
export class Head extends Component {
    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
             company:"Troublemakers",
             si: "Tu te lo has creido"
        }
    }
    
    render() {
        return (
            <header>
                <h1 className="HeadHeading"> This is a zone for {this.state.company}</h1>
                <p>{this.props.mssg}</p>
            </header>
        )
    }
}

export default Head
