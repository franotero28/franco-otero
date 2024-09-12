import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import '../css/btn-valo.css'

function Jugadores(props){

    const navigate = useNavigate();

    const handleViewPlayer = () => {
      navigate(`/jugadores/${props.id}`);
    };

    return( 
        <ContenedorJugadores key={props.nombre}>
            <div className="cards">
                <img className="players-img" src={require(`../img/players/${props.imagen}.jpeg`)} alt="" width={150} />
                <p className="m-3" >{props.nombre}</p>
                <p className="mb-2">Rol:<img className="m-1" src={require(`../img/roles/${props.rol}.webp`)} alt="" width={25} />
                <img className="m-1" src={require(`../img/roles/${props.rol2}.webp`)} alt="" width={25} /></p>
                <a className="link-jugador mt-2"><button onClick={handleViewPlayer} className="btn">Ver jugador</button></a>
            </div>
        </ContenedorJugadores>
    )
}

const ContenedorJugadores = styled.div`
    padding:10px;
    .cards{
        background-color: rgb(1, 2, 27);
        color: white;
        font-family: 'Outfit', sans-serif;
        display: flex;
        font-size: larger;
        flex-direction: column;
        text-align: center;
        margin:10px;
        padding:10px;
        border-radius: 5px;
        transition:0.1s;
    }

    .cards:hover{
        transform:scale(1.05);
    }

.players-img{
    border-radius: 5px 5px 0px 0px ;
    width:150px;
    height:150px;
}

.link-jugador:hover{
    color:red;
}
`

export default Jugadores