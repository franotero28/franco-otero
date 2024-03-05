import React from "react";
import "../estilos-css/testimonio.css"

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio"
      src={require(`../img/${props.imagen}-testimonio.jpg`)}
      alt={`imagen de ${props.nombre}`} />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> de <strong>{props.pais}</strong></p>
        <p className="oficio-testimonio">{props.oficio}</p>
        <p className="texto-testimonio">"{props.textoTestimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio