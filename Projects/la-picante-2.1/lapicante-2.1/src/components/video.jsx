import React from "react";
import styled from "styled-components";

function Contenedor1 (){
    return (
        <ContenedorVideo>
            <separador-2></separador-2>
            <img src={require("../img/la-picante-negro.png")} alt="" />
            <separador-1></separador-1>
        </ContenedorVideo>
    )
}

const ContenedorVideo = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    margin-top:120px;

    img{
        width:2000px;
    }

    separador-2{
        height: 1px;
        background-color: white;
        width: 100%;
        background: linear-gradient(to left, transparent 10%, rgb(0, 0, 0) 80%),
                    linear-gradient(to left, transparent 10%, rgb(0, 0, 0) 80%);
    }
    separador-1{
        height: 1px;
        background-color: #000000;
        width: 100%;
        background: linear-gradient(to right, transparent 10%, rgb(0, 0, 0) 80%),
                    linear-gradient(to right, transparent 10%, rgb(0, 0, 0) 80%);
    }
`

const img = styled.img`
    width:250px;
`

export default Contenedor1