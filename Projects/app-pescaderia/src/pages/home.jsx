import React from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";

function Home(){
    return(
        <ContenedorHome>
            <Navbar />
        </ContenedorHome>
    )
}

const ContenedorHome = styled.div`
    width:100%;
`

export default Home