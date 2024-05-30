import React from "react";
import styled from "styled-components";
import Formulario from "../components/formulario";

function Login(){
    return(
        <ContenedorLogin>
            <Formulario />
        </ContenedorLogin>
    )
}

const ContenedorLogin = styled.div`
    margin-bottom:200px;
    margin-top:100px;
`

export default Login