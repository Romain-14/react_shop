import { Component } from "react";
import Header from "./Containers/Header";
import Home from "./Containers/Home";
import Footer from "./Containers/Footer";
import "./App.css";


class App extends Component {
    constructor(){
        super()
        this.state = {
            alias: "ro",
            age: 37,
        }
    }

    render() {
        return (
            <div className="App">
                <Header user={this.state.alias} />
                <Home />
                <Footer />
            </div>
        );
    }
}

export default App;
