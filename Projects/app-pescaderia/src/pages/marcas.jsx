import React from "react";
import styled from "styled-components";
import FormMarcas from '../components/form-marcas'

function Marcas(){
    return(
        <ContenedorForm>
            <FormMarcas />
        </ContenedorForm>
    )
}

const ContenedorForm = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

export default Marcas