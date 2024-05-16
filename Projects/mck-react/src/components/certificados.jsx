import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

function Certificados(props){
    return(
        <ContenedorCertificados>
            <div className="certificados">
                <p><strong>Registros Akashicos</strong></p>
                <FontAwesomeIcon className="icon-1" icon={faGraduationCap}/>
                <span>Abriendo tu<strong> Registro Akáshico </strong> obtendrás información que esté disponible para traer sanación y consciencia a tu vida, obteniendo toda la experiencia vivida durante el viaje evolutivo de nuestra alma.</span>
            </div>
            <div className="certificados">
                <p><strong>Trainer en PNL</strong></p>
                <FontAwesomeIcon className="icon-2" icon={faGraduationCap}/>
                <span>En <strong>Programacion Neuro Linguistica</strong> enseño a usar tu cerebro para optimizar tus recursos, desarrollando técnicas para encontrarte con tu mejor versión en cada área de tu vida.</span>
            </div>
            <div className="certificados">
                <p><strong>Maestra en Reiki</strong></p>
                <FontAwesomeIcon className="icon-3" icon={faGraduationCap}/>
                <span>Con <strong>Reiki </strong> estaremos compartiendo cada nivel con material didáctico  y prácticas. Sanación a uno mismo y para los que lo pidan.</span>
            </div>
            <div className="certificados">
                <p><strong>Hipnosis Ericksoniana</strong></p>
                <FontAwesomeIcon className="icon-4" icon={faGraduationCap}/>
                <span>Con <strong>Reiki </strong> estaremos compartiendo cada nivel con material didáctico  y prácticas. Sanación a uno mismo y para los que lo pidan.</span>
            </div>
        </ContenedorCertificados>
    )
}

const ContenedorCertificados = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:20px;
    margin-top:50px;
    font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
    .certificados{
        text-align:center;
        color:white;
        flex:1;
        display:flex;
        flex-direction:column;
        justify-content:start;
        align-items:center;
        padding:20px;
        height:400px;
        background-color:#290e1bef;
    }

    p{
        letter-spacing:2px;
        font-size:21px;
        margin-bottom:20px;
    }

    span{
        margin-top:20px;
        font-size:20px;
        cursor:default;
    }

    .icon-1, .icon-2, .icon-3, .icon-4{
        font-size:100px;
        position:absolute;
        top:950px;
        transition:1s linear;
    }

    .certificados span{
        opacity:0;
    }

    .certificados:hover span{
        opacity:1;
        transition:0.3s;
    }

    .certificados:hover .icon-1{
        position:absolute;
        top:1060px;
        transition:0.5s;
    }
    .certificados:hover .icon-2{
        position:absolute;
        top:1050px;
        transition:0.5s;
    }
    .certificados:hover .icon-3{
        position:absolute;
        top:1050px;
        transition:0.5s;
    }
    .certificados:hover .icon-4{
        position:absolute;
        top:1050px;
        transition:0.5s;
    }
    
    .certificados:hover{
        flex:1.5;
        transition:0.5s linear;
    }

    @media screen and (max-width:850px) {
        flex-direction:column;
        .icon-1{
            top:1220px;
        }
        .icon-2{
            top:1500px;
        }
        .icon-3{
            top:1770px;
        }
        .icon-4{
            top:2030px;
        }
        .certificados:hover .icon-1{
        position:absolute;
        opacity:0;
        transition:0.5s;
        }
        .certificados:hover .icon-2{
            position:absolute;
            opacity:0;
            transition:0.5s;
        }
        .certificados:hover .icon-3{
            position:absolute;
            opacity:0;
            transition:0.5s;
        }
        .certificados:hover .icon-4{
            position:absolute;
            opacity:0;
            transition:0.5s;
        }
        span{
            height:150px;
        }
    }

`

export default Certificados 