import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const formatTime = (time) => {
    let dias = Math.floor(time / 86400); // Calculamos los días dividiendo por 86400 (segundos en un día)
    let horas = Math.floor((time % 86400) / 3600); // Calculamos las horas utilizando el residuo de la división de los segundos entre 86400, y luego dividimos por 3600 (segundos en una hora)
    let minutos = Math.floor((time % 3600) / 60); // Calculamos los minutos utilizando el residuo de la división de los segundos entre 3600, y luego dividimos por 60 (segundos en un minuto)
    let segundos = Math.floor(time % 60); // Los segundos restantes son el residuo de la división por 60

    // Agregamos ceros a la izquierda si son menores que 10
    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;
    
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
        transition: 5s ease-out;
    }

    p{
        font-size:30px;
        margin:5px;
    }
`

const Countdown = ({segundos}) => {
  const [countdown, setCountdown] = useState(segundos);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Decrementa el contador cada segundo
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []); // Ejecuta este efecto solo una vez al montar el componente

  return (
    <div>
      <p>{formatTime(countdown)}</p>
    </div>
  );
};

export default Countdown;