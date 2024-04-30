import React from "react";
import styled from "styled-components";

function Usuarios (props){
    return(
        <Usuario>
            <img src={require(`../img/${props.imagen}.jpeg`)} alt="" />
        </Usuario>
    )
}

const Usuario = styled.div`
    width: 50px;
    height:50px;
    border:1px solid white; 
    border-radius:50px;
    img{
        width:50px;
        border-radius:50px;
    }
`

export default Usuarios