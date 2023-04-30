import React from "react";
import "./price.css"

const Price = (props) => {
    return (
        <>
            <div className="prix">
                <p className="price">{props.price}</p>
                <p className="Time">{props.time}</p>
            </div> 
        </>
    );
};

export default Price;