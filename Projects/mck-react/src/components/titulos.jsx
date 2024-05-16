import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function Titulos(){
    return(
        <Contenedor>
            <div className="contenedor-titulos">
                <h1>AMPLIANDO TU<br/> CONSCIENCIA</h1><br />
                <h2>SIN OCUPAR TU MENTE</h2><br />
                <p><FontAwesomeIcon icon={faGraduationCap}/><span-1><strong>LIC. MARIA CELIA KOCHUR</strong></span-1></p>
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
        margin-left:20px;
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