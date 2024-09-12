import React from "react";
import styled from "styled-components";

function Navbar(){
    return(
        <ContenedorNavbar>
            <img src={require("../img/logo-nostra-casa1.png")} alt="logo" width={180} />
            <div className="links">
                <a className="tabs" href="/">INICIO</a>
                <a className="tabs" href="">BAZAR</a>
                <a className="tabs" href="">DECORACION</a>
                <a className="tabs" href="">MUEBLES</a>
            </div>
        </ContenedorNavbar>
    )
}

const ContenedorNavbar = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    .links{
        background-color:#000000;
        display:flex;
        width:100%;
        justify-content:space-around;
        align-items:center;
        padding:10px 0px 10px 0px;
    }

    .tabs{
        text-decoration:none;
        color:grey;
    }

    .tabs:hover{
        color:white;
        transition:0.5s;
        transform:scale(1.05);
    }
`

export default Navbar