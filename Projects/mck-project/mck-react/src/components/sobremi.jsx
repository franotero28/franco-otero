import React from "react";
import styled from "styled-components";

function SobreMi(){

    const handleClick = function manejarclick(){
        window.open("https://api.whatsapp.com/send?phone=2235759355&text=Hola,%20te%20escribo%20para%20agendar%20una%20sesión")
    }

    return(
        <ContenedorPrincipal>
            <div className="contenedor-img">
                <img className="img-mck" src={require("../img/ma2.jpeg")} alt="" width={450}/>
            </div>
            <div className="contenedor-info" id="sobreMi">
                <h3>ACERCA DE MÍ</h3>
                <p className="texto">¡Hola! mi nombre es María Celia Kochur,cuento con mas de una década de experiencia en el campo del crecimiento personal, estoy aquí para guiarte en tu viaje hacia la transformación interior y el bienestar integral. </p>
                <p className="texto">¿Listo para descubrir tu verdadero ser y vivir una vida plena? ¡Contáctame hoy mismo y comienza tu viaje hacia la realización personal!</p>
                <button onClick={handleClick} className="boton-contacto">Agenda tu sesión!</button>
            </div>
        </ContenedorPrincipal>
    )
}

const ContenedorPrincipal = styled.div`
    margin-top:50px;
    padding:100px;
    display:grid;
    grid-template-columns:50% 50%;
    justify-content:space-around;
    flex-wrap:wrap;
    text-align:center;
    align-items:center;
    width:100%;

    .contenedor-info{
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

    .texto{
        color:white;
        text-align:start;
        letter-spacing:1px;
        font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
        font-weight:bold;
    }

    h3{
        font-size:50px;
        font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
        font-weight:bold;
        letter-spacing:5px;
        color:white;
    }

    .boton-contacto{
        background-color:#927797;
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


    @media screen and (max-width:850px){
        display:flex;
        justify-content:center;
        align-items:center;
        padding:50px;
        .img-mck{
            width:350px;
            margin-bottom:50px;
        }

        h3{
            font-size:40px;
        }

        .texto{
            font-size:18px;
        }
        .boton-contacto{
            margin-top:20px;
        }
    }
`

export default SobreMi