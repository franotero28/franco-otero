import React from "react";
import styled from "styled-components";

function Proyectos(){
    return(
        <ContenedorProyectos>
            <div className="mis-proyectos">
                <h2>Proyectos</h2>
            </div>
        </ContenedorProyectos>
    )
}

const ContenedorProyectos = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:500px;
    width:100%;
    margin-right:50px;

    .mis-proyectos{
        background-color:#000000d1;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:100px;
        border-radius:20px;
        border:solid 1px white;
    }
    h2{
        color:white;
    }
`

export default Proyectos