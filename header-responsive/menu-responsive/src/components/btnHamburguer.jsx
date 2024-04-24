import React from "react";
import "../css/btn-hamburguer.css"

function BotonHamburguesa(props){
    return(
        <>
        <div onClick={props.handleClick}
         className={`icon nav-icon-5 ${props.clicked ? "open": ""}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        </>
    )
}

export default BotonHamburguesa