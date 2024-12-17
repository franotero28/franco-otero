import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BotonHamburguesa from "./botonHamburguesa";
<style>
@import url('https://fonts.googleapis.com/css2?family=Jersey+25&display=swap');
</style>

function Navbar (){

    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        let prevScrollPos = window.scrollY;
        
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const visible = prevScrollPos > currentScrollPos;

            setShowNavbar(visible);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }


    return(
        <ContenedorNavbar id="navId" showNavbar={showNavbar}>
            <div className="contenedorHamburguesa">
                <BotonHamburguesa clicked={clicked} handleClick={handleClick} />
            </div>
            <img className="logo-lapicante" src={require("../img/la-picante-logo.png")} alt="La picante logo" />
            <div className={`links ${clicked ? "active" : ""}`}>
                <p>INICIO</p>
                <p>ENTRADAS</p>
                <p>CONTACTO</p>
            </div>
            <img src={require("../img/logo-lapicante.gif")} alt="" srcset="" width={60}/>
        </ContenedorNavbar>
    )
}

const ContenedorNavbar = styled.div`
    background-color:#ffffffa0;
    font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
    font-weight: 300;
    font-style: normal;
    color: #000000;
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    font-size:20px;
    position: fixed;
    top: ${({ showNavbar }) => (showNavbar ? "0" : "-150px")};
    transition: top 0.5s ease-in-out;
    z-index: 1000;

    .contenedorHamburguesa{
        display:none;
    }

    .links{
        display:flex;
    }

    p{
        font-weight:bold;
        cursor: pointer;
        padding:50px;
        margin:0;
    }
    p:hover{
        transition: all .5s;
        background:linear-gradient(to top, transparent 10%, #fffbfb 100%);
    }

    @media screen and (max-width:800px) {
        .logo-lapicante{
            width:150px;
        }
        .links{
            display:block;
            position:absolute;
            top:0px;
            left:-2000px;
            margin-left:auto;
            margin-right:auto;
            text-align:center;
        }
        .links.active{
            background-color:#d1d1d194;
            width:100%;
            display:flex;
            justify-content:center;
            position:absolute;
            top:100%;
            left:0;
            right:0;
            margin-right:auto;
            margin-left:auto;
            text-align:center;
            transition:all .6s ease;
            z-index:-1;
            font-size:15px;
        }
        .contenedorHamburguesa{
            display:block;
        }
        p{
            padding:10px;
            font-weight:bold;
            cursor: pointer;
            margin:0;
        }
        width:100%;
        justify-content:space-evenly;
    }
    `

export default Navbar