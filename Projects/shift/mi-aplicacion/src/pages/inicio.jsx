import React from "react";
import styled from "styled-components";

function Inicio(){
    return(
        <ContenedorInicio>
            <div className="contenedor-principal">
                <h2>La mejor app de reserva de turnos gratuita!</h2>
            </div>
            <h4>Reserva tu turno!</h4>
            <a className="btn btn-primary" href="/reserva-horarios">Click Aqui!</a>
        </ContenedorInicio>
    )
}

const ContenedorInicio = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

export default Inicio