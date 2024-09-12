import React from "react";
import styled from "styled-components";

function Inicio(){
    return(
        <ContenedorInicio>
          <h1>Este es el inicio</h1>
        </ContenedorInicio>
    )
}

const ContenedorInicio = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height:1000px;
    background-color:#e9e9e9;
`

export default Inicio