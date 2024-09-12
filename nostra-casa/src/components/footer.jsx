import React from "react";
import styled from "styled-components";

function Footer(){
    return(
        <ContenedorFooter>
            <img src={require("../img/logo-nostra-casa1.png")} alt="logo" width={120} />
        </ContenedorFooter>
    )
}

const ContenedorFooter = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;

`

export default Footer