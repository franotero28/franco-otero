import React from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css"
import { games } from "../json/games";

function Partidas(){

    Aos.init()



    return(
        <ContenedorPartidas>
            <h1 className="h1-players">Últimas Partidas </h1>
            {games.map( info =>(
                <div className="contenedor-partida">
                <div className="fecha-game">
                <p>{info.date}</p>    
                </div>   
                <div className={`tracker-games ${info.win ? "ganador" : "perdedor"}`}>
                    <img src={require(`../img/teams/oso-balduneta.png`)} width="60" />
                    <p className="team-name m-2" data-aos="fade-out" data-aos-delay="300">{info.team1}</p>
                    <p className="rondas-teams m-2">{info.rondaB}</p>
                    <p className="m-2">-</p>
                    <p className="rondas-teams m-2">{info.rondaR}</p>
                    <p className="team-name m-2" data-aos="fade-out" data-aos-delay="300">{info.team2}</p>
                    <img src={require(`../img/teams/${info.img2}.webp`)} width="60" />
                </div>
                <div className="vod-review">
                <a href={info.vod} target="_blank" className="v-review">📺 Vod Review</a>
                </div>
                </div>
            ))}
        </ContenedorPartidas>
    )
}

const ContenedorPartidas = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    font-family: 'Outfit', sans-serif;
    color:white;

    .contenedor-partida{
        width:100%;
    }

    .h1-players{
    text-align: center;
    color: white;
    letter-spacing:2px;
    }

    .tracker-games.ganador{
    display: flex;
    justify-content: center;
    text-align: center;
    text-align:center;
    padding-left:50px;
    padding-right:50px;
    align-items: center;
    background-color: rgb(39, 90, 42);
    font-size: xx-large;
    color: white;
    font-family: 'Outfit', sans-serif;
    }
    
    .tracker-games.perdedor{
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color:  rgb(190, 51, 51);
    font-size: xx-large;
    color: white;
    font-family: 'Outfit', sans-serif;
    }

    .fecha-game p{
        margin-bottom: 0px;
        text-align: center;
        font-family: 'Outfit', sans-serif;
        color: rgb(0, 0, 0);
        background-color: rgba(170, 168, 168, 0.295);
    }
    .vod-review{
    font-family: 'Outfit', sans-serif;
    background-color: rgba(123, 123, 243, 0.493);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: medium;
    margin-bottom: 20px;
}

.v-review{
    text-decoration: none;
    color: white;
    font-family: 'Outfit', sans-serif;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: small;
}

.v-review:hover{
    color: rgb(139, 139, 243);
    transition: 0.2s;
    transform: scale(1.1); 
}


`

export default Partidas