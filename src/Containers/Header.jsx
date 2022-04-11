import React, { Component } from "react";
import Nav from "../Components/Nav/Nav";

class Header extends Component {
   
    

    render() {
        
        return (
            <header>
                <h1 style={{color: "red"}}>Welcome to my shop</h1>
                <Nav user={this.props.user}/>
            </header>
        );
    }
}

export default Header;