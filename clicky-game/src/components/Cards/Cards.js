import React from "react";
import "./Cards.css"

const Cards = props => (
    <div className= "center-align">
    <div className ="card">
        <div className = "card-image">
        <img className ="images" alt={props.name} src={props.image} onClick={() => props.clickPicture(props.id)}/>
        </div>
    </div>
    </div>
)

export default Cards