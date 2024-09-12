import React from "react";
import styled from "styled-components";
import '../css/btn-valo.css'
import Aos from "aos";
import "aos/dist/aos.css"


function Header(){

    Aos.init()

    return(
        <ContenedorHeader>
            <img data-aos="fade-in" data-aos-delay="300" data-aos-duration="5000" src={require("../img/logo-balduneta.png")}/>
        </ContenedorHeader>
    )
}

const ContenedorHeader = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#000116;
    
`

export default Header