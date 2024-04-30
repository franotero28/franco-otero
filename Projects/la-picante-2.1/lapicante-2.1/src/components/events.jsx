import React from "react";
import styled from "styled-components";

function Eventos (props){
    return(
        <Header>
            <h1>TE LO VAS A PERDER?</h1>
            <p>📍{props.fecha}</p>
            <p>{props.entrada}</p>
            <p>{props.direccion}</p>
            <p>{props.ads}</p>
        </Header>
    )
}

const Header = styled.div`
    color: #000000;
    font-family: "Sedgwick Ave Display", cursive;
    font-weight: 400;
    font-style: normal;
    text-align:center;
    height:500px;
    p{
        margin:0px;
        padding:30px;
        font-size:60px;
    }
    h1{
        font-family:monospace;
    }
`

export default Eventos