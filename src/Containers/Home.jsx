import React, { Component } from "react";
import Card from "../Components/Card/Card";
import { items } from "../api/items";
import Loading from "../Components/Loading";

let timerID = null;

class Home extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        timerID = setTimeout(() => {
            this.setState((state) => (
                {...state, items: items}
                ));
        }, 3000);
    }

    render() {
        return (
            <main role="main" id="home">
                <section>
                    <h2>C'est pas faux !</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates repellendus suscipit dolor quas tempore
                        necessitatibus, possimus architecto porro perspiciatis
                        accusamus quidem voluptatum ad aperiam ducimus numquam
                        aut obcaecati magnam? Impedit fuga praesentium ratione
                        alias delectus ipsam amet, illum unde. Ad eaque beatae
                        tempora explicabo libero accusamus molestias laudantium
                        voluptatem quasi.
                    </p>
                </section>

                <section className="ctn-card">
                    {this.state.items.length ? (
                        this.state.items.map((item) => {
                            return (
                                <React.Fragment key={item.id}>
                                    <Card item={item} timer={timerID} />
                                </React.Fragment>
                            );
                        })
                    ) : (
                        <>
                            <Loading items={items} />
                        </>
                    )}
                </section>
            </main>
        );
    }
}

export default Home;
