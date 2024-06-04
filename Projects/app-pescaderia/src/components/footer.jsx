import React from "react";
import styled from "styled-components";


function Footer(){
    return(
        <ContenedorFooter>
            <img src={require("../img/logo_texto_icono.png")} alt="" srcSet="" width={150}/>
        </ContenedorFooter>
    )
}

const ContenedorFooter = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;
    width:100%;
    height:200px;
    background-color: rgba(33, 37, 41, 1 );
`

export default Footer