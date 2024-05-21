import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Aos from "aos";
import "aos/dist/aos.css"


const formatTime = (time) => {
    let dias = Math.floor(time / 86400);
    let horas = Math.floor((time % 86400) / 3600);
    let minutos = Math.floor((time % 3600) / 60); 
    let segundos = Math.floor(time % 60); 

    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;


    //eslint-disable-next-line
    {/*const dateTime = new Date('2024-05-18 00:00').getTime();
    const timestamp = Math.floor(dateTime / 1000);
    const ahora = Date.now();
    const timeAhora = Math.floor(ahora / 1000);
  
    const segundos1 = timestamp - timeAhora*/}

    return (
        <>
        <ContenedorTitulo>
            <h3>NO TE PIERDAS MI PROXIMA CHARLA!</h3>
        </ContenedorTitulo>
        <ContenedorContador id='contador'>
            <div data-aos="zoom-out" data-aos-duration="500" className='contador'>
                <p className='number'>{dias}</p>
                <p>Días</p>
            </div>
            <div data-aos="zoom-out" data-aos-duration="1000" className='contador'>
                <p className='number'>{horas}</p>
                <p>Horas</p>
            </div>
            <div data-aos="zoom-out" data-aos-duration="2000" className='contador'>
                <p className='number'>{minutos}</p>
                <p>Minutos</p>
            </div>
            <div data-aos="zoom-out" data-aos-duration="3000" className='contador'>
                <p className='number'>{segundos}</p>  
                <p>Segundos</p>
            </div>
        </ContenedorContador>
        </>
    )
}


const ContenedorTitulo = styled.div`
    text-align:center;
    margin-top:100px;
    h3{
        color:white;
        font-size:40px;
        font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
        font-weight:bold;
        letter-spacing:10px;
    }
    @media screen and (max-width:800px) {
        h3{
            font-size:28px;
        }
    }
`

const ContenedorContador = styled.div`
    display:flex;
    justify-content:center;
    margin-top:50px;
    .contador{
        color:white;
        font-family: "Avant Garde", Avantgarde, "Century Gothic",
        CenturyGothic, "AppleGothic", sans-serif;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        margin:20px;
        background-color:#500606;
        background:linear-gradient(to top, transparent 10%, #8d7b8f 100%);
    }

    .number{
        padding:20px;
        font-size:120px;
    }

    p{
        font-size:30px;
        margin:5px;
    }

    @media screen and (max-width:800px) {
        .number{
            font-size:30px;
        }
        p{
            font-size:15px;
        }
        .contador{
            margin:5px;
        }
        width:100%;
        margin-bottom:100px;
        h3{
            font-size:20px;
        }
    }
`

const Countdown = ({ segundos1 }) => {
  const [countdown, setCountdown] = useState(segundos1);

  useEffect(() => {
    Aos.init();
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>{formatTime(countdown)}</p>
    </div>
  );
};


export default Countdown;