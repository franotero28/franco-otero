import React from "react";
import styled from "styled-components";
import FormProducts from '../components/form-products' 

function TypeProducts(){
    return(
        <ContenedorForm>
            <FormProducts/>
        </ContenedorForm>
    )
}

const ContenedorForm = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

export default TypeProducts