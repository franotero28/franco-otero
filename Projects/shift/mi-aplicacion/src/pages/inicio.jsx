import React from "react";
import styled from "styled-components";

function Inicio(){
    return(
        <ContenedorInicio>
            <h4>Reserva tu turno!</h4>
            <button className="btn btn-primary">Click Aqui!</button>
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