import React, { Component } from "react";
import styles from './card.module.css';


class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log(styles);
        const { item } = this.props;
        return (
            <article className={styles.card} id={styles.myid}>
                <h3>{item.name}</h3>
                <img
                    src={require("../../assets/img/" + item.imgURL)}
                    alt={item.name}
                />
                <p>{item.description}</p>
                <p>{item.price}€</p>
                <button>buy</button>
            </article>
        );
    }
}

export default Card;
