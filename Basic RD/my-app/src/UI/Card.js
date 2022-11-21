import React from "react";
import classes from "./Card.module.css"

const Card=(props)=>{

    return <div className={classes.card}>
        <div>{props.title}</div>
    </div>

}

export default Card