import React from "react";
import styles from "./Pokemon.module.css";

function Pokemon(props){
    return(
    <div className={`${styles.purple}`}>
        <h1>Hola! soy {props.name} </h1>  
    </div>
    );
}

export default Pokemon;