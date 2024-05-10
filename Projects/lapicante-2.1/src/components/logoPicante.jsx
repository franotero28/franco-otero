import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css"



function Contenedor1 (){

    useEffect(()=>{
        Aos.init();
    }, [])

    return (
        <ContenedorVideo>
            <separador-2></separador-2>
            <img data-aos="fade-up" className="logoPicante" src={require("../img/la-picante-negro.png")} alt="Logo la picante" />
            <separador-1></separador-1>
        </ContenedorVideo>
    )
}

const ContenedorVideo = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    margin-top:120px;

    .logoPicante{
        width:1000px;
    }

    separador-2{
        height: 1px;
        background-color: white;
        width: 100%;
        background: linear-gradient(to left, transparent 10%, rgb(0, 0, 0) 80%),
                    linear-gradient(to left, transparent 10%, rgb(0, 0, 0) 80%);
    }
    separador-1{
        height: 1px;
        background-color: #000000;
        width: 100%;
        background: linear-gradient(to right, transparent 10%, rgb(0, 0, 0) 80%),
                    linear-gradient(to right, transparent 10%, rgb(0, 0, 0) 80%);
    }
    
    @media screen and (max-width:800px) {
        .logoPicante{
            width:200px;
        }
        separador-1{
            width:150px;
        }
        separador-2{
            width:150px;
        }
        width:100%;
        margin-top:100px;
        margin-bottom:100px;
    }
`

export default Contenedor1