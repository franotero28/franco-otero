import React from "react";
import styled from "styled-components";

function Intro(){
    return(
        <ContenedorPerfil>
            <div className="mi-info">
                <div className="mi-descripcion">
                    <h1>Franco Otero /{">"}</h1>
                    <h3>Desarrollador Web 💻</h3>
                    <p>"Soy un desarrollador web comprometido, con habilidades en trabajo en equipo, resolución de problemas y capacidad de escucha activa. Estoy motivado para aprender y aplicar nuevos conocimientos, contribuyendo al éxito colectivo. Especializado en front-end, siempre estoy en constante aprendizaje."
                    </p>
                </div>
                <div className="mi-imagen">
                    <img className="img-perfil" src={require("../img/foto-perfil.jpeg")} alt="foto perfil fran" width={350} />
                </div>
            </div>
        </ContenedorPerfil>
    )
}

const ContenedorPerfil = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    .mi-info{
        background-color:#000000d1;
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
        padding:100px;
        margin:70px;
        border-radius:20px;
        border:solid 1px white;
    }

    .mi-descripcion{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }

    p{
        color:white;
        text-align:center;
        margin-right:50px;
        margin-top:50px;
        letter-spacing:2px;
    }

    h1{
        text-align:center;
        margin:0;
        color: rgb(0, 0, 97);
        font-size:80px;
        font-family: "Prompt", sans-serif;
        font-weight: bold;
        font-style: normal;
        letter-spacing:1px;
    }

    h3{
        margin:0;
        font-size:40px;
        color:white;
    }


    .img-perfil{
        margin-left:px;
        border-radius:10px;
        border:solid 1px white;
    }
`

export default Intro
