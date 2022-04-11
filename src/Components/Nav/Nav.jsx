import React, { Component } from "react";

class Nav extends Component {
    

    render() {
        return (
            <nav>

                <a href="/" className="active">
                    Home
                </a>

                {!this.props.user ? (
                    <a href="authentication">login</a>
                ) : (
                    <>
                        <a href="dashboard">dashboard</a>
                        <a href="authentication">logout</a>
                    </>
                )}
            </nav>
        );
    }
}

export default Nav;
