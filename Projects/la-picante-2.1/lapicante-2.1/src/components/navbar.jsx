import React, { useState, useEffect } from "react";
import styled from "styled-components";
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

  

    return(
        <ContenedorNavbar id="navId" showNavbar={showNavbar}>
            <img src={require("../img/la-picante-logo.png")} alt="" />
            <p>INICIO</p>
            <p>ENTRADAS</p>
            <p>BARBERIA</p>
            <p>CONTACTO</p>
        </ContenedorNavbar>
    )
}

const ContenedorNavbar = styled.div`
    background-color:#33333316;
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
    `

export default Navbar