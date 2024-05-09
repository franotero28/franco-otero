import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTag, faCalendarDays, faHeadphones } from "@fortawesome/free-solid-svg-icons";


function Eventos (props){
    return(
        <Header>
            <img src={require(`../img/${props.img}`)}/>
            <div className="contenedor-info">
                <p></p>
                <p className="titulo"><strong>{props.titulo}</strong></p>
                <p><FontAwesomeIcon icon={faCalendarDays}/><span>{props.fecha}hs</span></p>
                <p><FontAwesomeIcon icon={faTag}/><span>${props.entrada}</span></p>
                <p><FontAwesomeIcon icon={faHeadphones}/><span>{props.dj}</span></p>
                <p><FontAwesomeIcon icon={faHome}/><span>{props.direccion}</span></p>
            </div>
                <button className="boton">{props.button}</button>
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

    .titulo{
        font-size:20px;
        text-align:center;
    }

    img{
        border-radius:5px 5px 0px 0px;
        width:250px;
        height:250px;
    }

    .contenedor-info{
        font-size:15px;
        font-weight:bold;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:left;
        background-color:#f3f3f3b2;
        padding:5px;
        color:black;
        width:250px;
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
    }
    .boton:hover{
        transform:scale(1.01);
        transition:0.1s;
        background-color:#999;
    }
`

export default Eventos