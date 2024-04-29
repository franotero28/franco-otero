import React from "react";
import styled from "styled-components";
<style>
@import url('https://fonts.googleapis.com/css2?family=Jersey+25&display=swap');
</style>

function Navbar (){
    return(
        <ContenedorNavbar>
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
    background-color: #000000;
    color: white;
    width:100%;
    display:flex;
    justify-content:center;
    font-size:20px;
    p{
        cursor: pointer;
        padding:50px;
        margin:0;
    }
    p:hover{
        transform:5s;
        transition:5s;
        background:linear-gradient(to top, transparent 10%, #1d1d1d 100%);
    }
    `
    const ContenedorPromo = styled.div`
        display:flex;
    `

    const Eslogan = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color:red;
    text-align:center;
    `

export default Navbar