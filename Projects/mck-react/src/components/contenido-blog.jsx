import React from "react";
import styled from "styled-components";

function ContenidoBlog(props){
    return(
        <ContainerBlog id={`${props.slash}`}>
            <h4>{props.titulo}</h4>
                <div className="contenido-blog">
                    <p className="p-contenido">-{props.contenido}</p>
                    <img className="img-contenido" src={require(`../img/${props.img}`)} width={220}/>
                </div>
                <button>Comprar material de estudio</button>
            <p className="p-fecha">Fecha de Actualizacion: {props.fechaup}</p>
        </ContainerBlog>
    )
}

const ContainerBlog = styled.div`
    margin-top:50px;
    margin-bottom:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:20px;
    background-color:#e7e7e796;
    width:100%;
    h4{
        color:white;
        font-size:25px;
        font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
        font-weight:bold;
        letter-spacing:5px;
    }

    .contenido-blog{
        display:grid;
        grid-template-columns:60% 40%;
        gap:70px;
        margin-top:40px;
    }

    .p-contenido{
        font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
        font-weight:bold;
        letter-spacing:1px;
    }

    button{
        font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
        font-weight:bold;
        letter-spacing:1px;
        color:white;
        background:#8f6581;
        margin-top:25px;
        border:0px;
        border-radius:5px;
        padding:5px;
    }

    button:hover{
        transform:scale(1.05);
        transition:0.5s;
    }

    .p-fecha{
        margin:0px;
        margin-top:50px;
    }


    @media screen and (max-width:800px) {
        h1{
            
        }
        .contenido-blog{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
        }
    }
`

export default ContenidoBlog