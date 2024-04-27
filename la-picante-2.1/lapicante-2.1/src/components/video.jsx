import React from "react";
import videoBg from "../img/lapicante.mp4"
import styled from "styled-components";

function Contenedor1 (){
    return (
        <ContenedorVideo>
            <separador></separador>
            <Video src={videoBg} autoPlay muted loop/>
            <separador-1></separador-1>
        </ContenedorVideo>
    )
}

const ContenedorVideo = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    padding:2rem;
    separador{
        height: 1px;
        background-color: white;
        width: 100%;
        background: linear-gradient(to left, transparent 10%, rgb(212, 212, 212) 80%),
                    linear-gradient(to left, transparent 10%, rgb(212, 212, 212) 80%);
    }
    separador-1{
        height: 1px;
        background-color: white;
        width: 100%;
        background: linear-gradient(to right, transparent 10%, rgb(212, 212, 212) 80%),
                    linear-gradient(to right, transparent 10%, rgb(212, 212, 212) 80%);
    }
`

const Video = styled.video`
    width:110%;
`

export default Contenedor1