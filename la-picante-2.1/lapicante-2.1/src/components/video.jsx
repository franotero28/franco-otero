import React from "react";
import videoBg from "../img/lapicante.mp4"
import styled from "styled-components";

function Contenedor1 (){
    return (
        <Video src={videoBg} autoPlay muted loop/>
    )
}

const Video = styled.video`
    width:700px;
`

export default Contenedor1