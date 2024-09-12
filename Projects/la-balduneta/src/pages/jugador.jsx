import React from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom";
import { jugadoresJson } from '../json/jugadores'

function JugadorPage(){

    const { id } = useParams();
    const jugador = jugadoresJson.find(jugador => jugador.id.toString() === id);
  
    if (!jugador) {
      return <p>Jugador no encontrado</p>;
    }

    return (
        <ContenedorJugador>
            <div className="player">
            <div className="redes">
                <img data-aos="zoom-in" data-aos-delay="300" className="players-img" src={require(`../img/players/${jugador.imagen}.jpeg`)} />
                <div>
                    <a target="_blank" href="https://tracker.gg/valorant/profile/riot/BLN%20franz%232810/overview"><i className="fa-solid fa-gamepad"></i></a>
                    <a target="_blank" href="https://www.instagram.com/frannotero28/"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
                <div className="cards">
                    <p className="tag-name">{jugador.nombre}</p>
                    <p>{jugador.informacion}</p>
                    <p>{jugador.descripcion}</p>
                    <p>Su prime fue <img src={require(`../img/rangos/${jugador.prime}.webp`)}width="60" /></p>
                    <p>Rango Actual: <img src={require(`../img/rangos/${jugador.rango}.webp`)} width="60"/></p>
                    <p>Mains:</p>
                    <div className="mainpj">
                        <img src={require(`../img/agentes/${jugador.main}.webp`)} width="50"/>
                        <img src={require(`../img/agentes/${jugador.main2}.webp`)} alt="" width="50"/>
                    </div>
                </div>
            </div>
            <div className="clips">
                <div className="best-clip">
                    <h2 className="titles">Mejor clip:</h2>
                    <iframe className="clips-yt" width="560" height="315" src="https://www.youtube.com/embed/T2CAc10Usnk?si=Z5rrLlu_oCMIuclF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="best-clip">
                    <h2 className="titles">Peor clip:</h2>
                    <iframe className="clips-yt" width="560" height="315" src="https://www.youtube.com/embed/v7vmDGEFbVU?si=oHU-8mItPgiZrsUx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </ContenedorJugador>
    )
}

const ContenedorJugador = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;

    .h1-players{
    text-align: center;
    color: white;
    font-family: 'Outfit', sans-serif;
}

.player{
    display: flex;
    justify-content: center;
    align-items: center;
}

.redes{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

body{
    background-image: url(../img-mapas/fondonegro.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

.fab{
    color: white;
    background-color: rgba(41, 13, 201, 0.329);
    padding: 10px;
    border-radius: 5px;
    font-size:larger;
    transition: transform .2s; 
}

.fab:hover{
    transform: scale(1.1); 
}

.fa-solid{
    color: white;
    background-color: rgba(41, 13, 201, 0.329);
    padding: 10px;
    border-radius: 5px;
    font-size:larger;
    transition: transform .2s; 
}

.fa-solid:hover{
    transform: scale(1.1); 
}

@media screen and (max-width:500px) {
    .player{
        flex-direction: column;
    }
}

.cards{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin:10px;
    border-radius: 5px;
    font-family: 'Outfit', sans-serif;
    color: white;
    font-size: larger;
}

.players-img{
    border-radius: 5px;
    margin: 10px;
    width:300px;
    height:300px;
}

.titles{
    color: white;
    font-family: 'Outfit', sans-serif;
}

.clips{
    width:100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
}

@media screen and (max-width:500px) {
.clips-yt{
    width:350px;
}
}

@media screen and (max-width:500px) {
    .clips{
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .titles{
        text-align: center;
    }
}
`

export default JugadorPage