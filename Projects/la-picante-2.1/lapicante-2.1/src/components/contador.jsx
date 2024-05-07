import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const formatTime = (time) => {
    let dias = Math.floor(time / 86400);
    let horas = Math.floor((time % 86400) / 3600); // Calculamos las horas utilizando el residuo de la división de los segundos entre 86400, y luego dividimos por 3600 (segundos en una hora)
    let minutos = Math.floor((time % 3600) / 60); 
    let segundos = Math.floor(time % 60); 

    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;
    

    const dateTime = new Date('2024-05-10').getTime();
    const timestamp = Math.floor(dateTime / 1000);
    const ahora = Date.now();
    const timeAhora = Math.floor(ahora / 1000);

    console.log(timestamp)

    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();
    const hours = fechaActual.getHours();
    const minutes = fechaActual.getMinutes();
    const seconds = fechaActual.getSeconds();
    const miliseconds = fechaActual.getMilliseconds();

    console.log(dia ,mes ,anio, hours, minutes, seconds)


    return (
        <ContenedorContador>
            <div className='contador'>
                <p className='number'>{dias}</p>
                <p>Días</p>
            </div>
            <div className='contador'>
                <p className='number'>{horas}</p>
                <p>Horas</p>
            </div>
            <div className='contador'>
                <p className='number'>{minutos}</p>
                <p>Minutos</p>
            </div>
            <div className='contador'>
                <p className='number'>{segundos}</p>  
                <p>Segundos</p>
            </div>
        </ContenedorContador>
    )
}

const ContenedorContador = styled.div`
    display:flex;
    justify-content:center;

    .contador{
        font-family: "Avant Garde", Avantgarde, "Century Gothic",
    CenturyGothic, "AppleGothic", sans-serif;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        margin:20px;
        background-color:#500606;
        background:linear-gradient(to top, transparent 10%, #dddddd 100%);
    }

    .number{
        padding:20px;
        font-size:120px;
    }

    p{
        font-size:30px;
        margin:5px;
    }
`

const Countdown = ({ initialSeconds }) => {
    const [countdown, setCountdown] = useState(
      parseInt(localStorage.getItem('countdownSeconds')) || initialSeconds // Por defecto, 1 hora
    );
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCountdown((prevCountdown) => {
          localStorage.setItem('countdownSeconds', prevCountdown - 1);
          return prevCountdown - 1;
        });
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