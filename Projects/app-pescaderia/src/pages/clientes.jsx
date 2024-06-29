import React from "react";
import FormClientes from "../components/form-clientes";
import styled from "styled-components";

function Clientes(){
    return(
        <ContenedorClientes>
        <FormClientes />
        </ContenedorClientes>
    )
}

const ContenedorClientes = styled.div`
    display:block;
    justify-content:center;
    align-items:center;
    min-height:500px;
`

export default Clientes