import React from "react";
import "../estilos-css/testimonio.css"

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio"
      src={require("../img/messi-testimonio.jpg")}
      alt="imagen de messi"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Lionel Andres Messi</p>
        <p className="oficio-testimonio">Futbolista</p>
        <p className="texto-testimonio">En mis tiempos libres me encanta ir a la picante a disfrutar de una buena noche</p>
      </div>
    </div>
  );
}

export default Testimonio