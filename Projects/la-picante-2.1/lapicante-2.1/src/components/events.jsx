import React from "react";
import styled from "styled-components";

function Eventos (props){
    return(
        <Header>
            <p>{props.fecha}</p>
            <p>{props.entrada}</p>
            <p>{props.direccion}</p>
            <p>{props.ads}</p>
        </Header>
    )
}

const Header = styled.div`
    font-family: "Avant Garde", Avantgarde, "Century Gothic",
    CenturyGothic, "AppleGothic", sans-serif;
    text-align:center;
    p{
        margin:0px;
        padding:30px;
        font-size:60px;
    }
`

export default Eventos