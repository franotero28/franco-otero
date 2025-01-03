import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css"

function Footer(){

    useEffect(()=>{
        Aos.init();
    }, [])

    return(
        <FooterPicante data-aos="fade">
            <p>LA PICANTE DERECHOS RESERVADOS ©</p>
            <img src={require("../img/la-picante-negro.png")} width={150}/>
        </FooterPicante>
    )
}

const FooterPicante = styled.div`
    display:flex;
    justify-content:center;
    padding:0px 50px 0px 50px;
    align-items:center;
    background-color:#9b9b9b9f;
    p{
        font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
        font-size:20px;
        font-weight:bold;
        padding:20px;
    }

    @media (max-width:800px){
        margin-top:350px;
        p{
            font-size:10px;
        }
        img{
            width:75px;
        }
    }
`

export default Footer