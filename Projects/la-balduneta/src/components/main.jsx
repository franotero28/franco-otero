import React from "react";
import styled from "styled-components";
import '../css/btn-valo.css'

function Main(){
    return(
        <ContenedorMain>
            <div className="contenedor-botones">
            <a href="#jugadores">
            <div>
                <button className="btn btn--light">
                    <span className="btn__inner">
                    <span className="btn__slide"></span>
                    <span className="btn__content">Jugadores</span>
                    </span>
                </button>
            </div>
            </a>
            <a href="#j">
            <div>
                <button className="btn btn--light">
                    <span className="btn__inner">
                    <span className="btn__slide"></span>
                    <span className="btn__content">Ultimas Partidas</span>
                    </span>
                </button>
            </div>
            </a>
            <a href="#jugadores">
            <div>
                <button className="btn btn--light">
                    <span className="btn__inner">
                    <span className="btn__slide"></span>
                    <span className="btn__content">Sobre Nosotros</span>
                    </span>
                </button>
            </div>
            </a>
            </div>
            <section data-aos="fade-in" data-aos-delay="100" data-aos-duration="1000"> 
            <h1 className="h1-players">Sobre nosotros</h1>
            <div className="sobre-us">
                <img className="mb-2" src={require("../img/logo-valo.png")} alt="1" width="110"/>
                <p>Somos un equipo de e-sports de valorant Argentina</p>
                <p>Alabamos a nuestra inspiracion para fundar la organizacion "LA BALDUNETA"</p>
                <p>Sr. Matias "PEDILOOO" Balduzzi</p>
                <img className="baldu" src={require("../img/baldu.jpg")} alt="" width="200" />  
                <p className="h1-players" >Mirá los partidos o reviews por nuestro canal de twitch!</p>
                <a target="_blank" href="https://www.twitch.tv/iabalduneta/"><i className="fab fa-twitch"></i></a>
            </div>
             </section>
        </ContenedorMain>
    )
}

const ContenedorMain = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    .contenedor-botones{
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        width:100%;
        margin-top:25px;
    }

    .h1-players{
    text-align: center;
    color: white;
    letter-spacing:2px;
    font-family: 'Outfit', sans-serif;
}

    .sobre-us{
    color: white;
    font-family: 'Outfit', sans-serif;
    font-size: larger;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.baldu{
    border-radius: 5px;
    margin-bottom: 10px;
}

@media screen and (max-width:500px) {
    .team-name{
        font-size:small;
        margin: 10px;
        margin-top: 20px;
    }
}

`

export default Main