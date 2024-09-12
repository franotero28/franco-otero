import React from "react"
import Main from "../components/main"
import Partidas from "../components/partidas"
import Jugadores from '../components/jugadores';
import PageJugadores from '../pages/jugador'
import {jugadoresJson} from '../json/jugadores'

function Inicio(){
    return(
    <>
      <Main />
      <Partidas />
      <div className='players'>
        {jugadoresJson.map(jugador =>(

        <Jugadores 
        id={jugador.id}
        nombre={jugador.nombre}
        rol={jugador.rol}
        rol2={jugador.rol2}
        imagen={jugador.imagen}
        descripcion={jugador.descripcion}
        informacion={jugador.informacion}
        rango={jugador.rango}
        prime={jugador.prime}
        />
        
        )) }
      </div>
        </>
    )
}

export default Inicio