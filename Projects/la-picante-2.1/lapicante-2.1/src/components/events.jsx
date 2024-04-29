import React from "react";
import styled from "styled-components";

function Eventos (props){
    return(
        <Header>
            <p>📍{props.fecha}</p>
            <p>{props.entrada}</p>
            <p>{props.direccion}</p>
        </Header>
    )
}

const Header = styled.div`
    color: #ffffff;
    font-family: "Sedgwick Ave Display", cursive;
    font-weight: 400;
    font-style: normal;
    text-align:center;
    height:500px;
    p{
        margin:0px;
        padding:30px;
        font-size:50px;
    }
`

export default Eventos