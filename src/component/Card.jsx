import React from "react";
import "./Card.css"

const Card = (props) => {
    return(
        <>
            <img src={props.pic} alt="ETH" className="pic" />
            <h1 className="heading">{props.title}</h1>
            <p className="description">{props.desc}</p>
        </>
    );
};

export default Card;
