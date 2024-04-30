import React from "react";
import styled from "styled-components";
<style>
@import url('https://fonts.googleapis.com/css2?family=Jersey+25&display=swap');
</style>

function Navbar (){
    return(
        <ContenedorNavbar>
            <img src={require("../img/la-picante-logo.png")} alt="" />
            <p>INICIO</p>
            <p>EVENTOS</p>
            <p>BARBERIA</p>
            <p>CONTACTO</p>
        </ContenedorNavbar>
    )
}

const ContenedorNavbar = styled.div`
    font-family: "Ubuntu", sans-serif;
    font-weight: 300;
    font-style: normal;
    color: #000000;
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    font-size:20px;
    p{
        font-weight:bold;
        cursor: pointer;
        padding:50px;
        margin:0;
    }
    p:hover{
        transition: all .5s;
        background:linear-gradient(to top, transparent 10%, #ececec 100%);
    }
    `
    const ContenedorPromo = styled.div`
        display:flex;
    `



export default Navbar