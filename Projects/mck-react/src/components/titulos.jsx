import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function Titulos(){

    const handleClick = function manejarclick(){
        window.open("https://api.whatsapp.com/send?phone=2235759355&text=Hola,%20te%20escribo%20para%20agendar%20una%20sesión")
    }

    return(
        <Contenedor>
            <div className="contenedor-titulos">
                <h1>AMPLIANDO <br/> CONSCIENCIAS</h1><br />
                <h2>PARA UN BIENESTAR GENERAL</h2><br />
                <p><FontAwesomeIcon icon={faGraduationCap}/><span-1><strong>MARIA CELIA KOCHUR</strong></span-1></p>
                <button onClick={handleClick} className="boton-contacto">Agenda tu sesión!</button>
            </div>
            <div className="contenedor-imagen">
                <img src={require("../img/ma-frente2.webp")} alt="LOGO MCK" width={350} />
            </div>
        </Contenedor>
    )
}

const Contenedor = styled.div`
    color:white;
    padding:50px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;
    text-align:center;
    .boton-contacto{
        margin-top:50px;
        background-color:#b8a0bdc5;
        color:white;
        font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
        border:0px;
        border-radius:5px;
        padding:10px;
    }

    .boton-contacto:hover{
        background-color:#4d3d4b;
        transition:0.1s;
    }
    h1{
        font-size:60px;
        font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
        font-weight:bold;
        letter-spacing:10px;
    }
    h2{
        color:black;
        font-size:21px;
        letter-spacing:5px;
    }
    span-1{
        margin-left:10px;
        font-size:19px;
    }

    @media screen and (max-width:850px) {
        h1{
            font-size:35px;
        }
        .contenedor-imagen{
            margin-top:50px;
            margin-bottom:50px;
        }
    }
`

export default Titulos