import React from "react";
import styled from "styled-components";
import ReservaHorarios from '../components/reserva-horarios.jsx'

function EditarHorarios(){
    return(
        <ContenedorDivisor>
            <ReservaHorarios />
        </ContenedorDivisor>
    )
}

const ContenedorDivisor = styled.div`
    display:flex;
`
export default EditarHorarios