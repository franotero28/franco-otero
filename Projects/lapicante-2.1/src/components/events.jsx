import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTag, faCalendarDays, faHeadphones } from "@fortawesome/free-solid-svg-icons";


function Eventos (props){



    console.log(props)

    return(
        <Header>
            <div className={`${props.finalizado == true ? "finalizado" : "no-finalizado" }`}>
                <p className="p-finalizado">Evento Finalizado</p>
            </div>
            <img src={require(`../img/${props.img}`)} alt="flyer evento"/>
            <div className="contenedor-info">
                <p></p>
                <p className="titulo"><strong>{props.titulo}</strong></p>
                <hr />
                <p><FontAwesomeIcon icon={faCalendarDays}/><span>{props.fecha}hs</span></p>
                <p><FontAwesomeIcon icon={faTag}/><span>${props.entrada}</span></p>
                <p><FontAwesomeIcon icon={faHeadphones}/><span>{props.dj}</span></p>
                <p><FontAwesomeIcon icon={faHome}/><span>{props.direccion}</span></p>
            </div>
                <button onClick={() => window.open('https://api.whatsapp.com/send?phone=2235915998&text=Hola,%20te%20escribo%20para%20las%20entradas%20de%20la%picante', '_blank')}  className="boton">{props.button}</button>
        </Header>
    )
}

const Header = styled.div`
    font-family: "Avant Garde", Avantgarde, "Century Gothic",
    CenturyGothic, "AppleGothic", sans-serif;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    box-shadow:-2px 2px 10px black;
    margin-bottom:100px;

    .finalizado{
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#000000b2;
        height:250px;
        width:250px;
        position:absolute;
        border-radius:5px 5px 0px 0px;
        z-index:1;
    }

    .p-finalizado{
        background-color:#77777768;
        padding:5px;
        font-size:20px;
        color:white;
        rotate:-30deg;
        border:dotted 1px white;
        border-radius:5px;
    }

    .no-finalizado{
        display:none;
    }

    img{
        border-radius:5px 5px 0px 0px;
        width:250px;
        height:500px;
    }

    .titulo{
        font-size:18px;
        text-align:center;
        margin:0;
        margin-bottom:10px;
    }

    hr{
        margin-top:0;
        margin-bottom:5px;
    }


    .contenedor-info{
        font-size:15px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:left;
        background-color:#f3f3f3b2;
        padding:5px;
        color:black;
        width:250px;
        text-indent:2px;
    }

    span{
        margin-left:10px;
    }

    .boton{
        width:250px;
        background-color:#777;
        outline:none;
        border:0px;
        color:black;
        border-radius:0px 0px 5px 5px;
        padding:5px;
    }
    .boton:hover{
        transition:0.5s;
        background-color:#dbdbdb;
    }

    @media (max-width:800px){
        img{
            width:160px;
            height:300px;
        }
        .titulo{
            font-size:12px;
        }
        .contenedor-info{
            width:160px;
            height:200px;
            font-size:10px;
        }
        .finalizado{
            width:160px;
            height:200px;
        }
        .p-finalizado{
            font-size:12px;
        }
        .boton{
            font-size:10px;
            width:160px;
            padding:10px;
        }
    }
    @media (max-width:800px){
        width:125px;
        height:125px;
    }
`

export default Eventos