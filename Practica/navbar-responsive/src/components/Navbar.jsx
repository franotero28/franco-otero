import React, { useState }from "react";
import BotonHamburguesa from "./Boton";
import Usuarios from "./Usuario";
import styled from "styled-components";

function Navbar () {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <ContenedorNavbar>
            <div className="burguer">
                <BotonHamburguesa clicked={clicked} handleClick={handleClick}/>
            </div>
            <h2>Padel Torneos</h2>
            <div className={`links ${clicked ? "active" : ""}`}>
                <a href="#">Home</a>
                <a href="#">Contact</a>
                <a href="#">Blog</a>
            </div>
            <Usuarios imagen = "2_"/>
            <Bgdiv className={`initial ${clicked ? "active" : ""}`}></Bgdiv>
        </ContenedorNavbar>
    )
}


export default Navbar

const Bgdiv = styled.div`
    background-color:black;
    position:absolute;
    left:-2000px;
    top:0px;
    right:0px;
    width:100%;
    height:100%;
    z-index:-1;
    transition:all .6s ease;
    &.active{
        left:0;
        top:0;
        width:50%;
        height:100%;
    }

`

const ContenedorNavbar = styled.div`
    color:white;
    display: flex;
    justify-content:space-around;
    align-items:center;
    background-color:black;

    a{
        text-decoration:none;
        color:white;
        padding:2rem;
    }

    .burguer{
        @media (min-width:700px){
            display:none;
        }
    }

    .links{
        position:absolute;
        top:-500px;
        left:-500px;
        margin-left:auto;
        margin-right:auto;
        text-align:center;
        a{
            font-size:2rem;
            color:white;
            display:block;
        } 
        @media (min-width:700px){
            position:initial;
            margin:0;
            a{
                font-size:1rem;
                color:white;
                display:inline;
            }
        }
    }
    .links.active{
        width:100%;
        display:block;
        position:absolute;
        top:30%;
        left:0;
        right:0;
        margin-right:auto;
        margin-left:auto;
        text-align:left;
        a{
            color:white;
        }
    }
`