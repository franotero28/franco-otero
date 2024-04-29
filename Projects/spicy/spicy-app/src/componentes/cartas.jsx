import React from "react";
import "../estilos-css/cartas.css"

function Panfletos(props){
    return(
    <div className="contenedor-evento">
        <img className="imagen-evento" src={require(`../img/${props.imagen}.jpg`)} />
        <div className="informacion-evento">
        <p>{props.nombre}</p>
        <p>${props.precio}</p>
        <p className="direccion-evento">{props.direccion}</p>
        <button className="boton-evento">Salir a bailar</button>
        </div>
    </div>
    );
}

export default Panfletos