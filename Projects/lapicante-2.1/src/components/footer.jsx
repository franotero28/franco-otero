import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css"

function Footer(){

    useEffect(()=>{
        Aos.init();
    }, [])

    return(
        <FooterPicante data-aos="fade-up">

        </FooterPicante>
    )
}

const FooterPicante = styled.div`
    display:flex;
    height:500px;
    background-color:white;
    margin-top:500px;
`

export default Footer