import React from "react";
import styled from "styled-components";

function Contador(){
    return (
        <ContenedorContador>
            <div className="contador">
                <p className="number">15</p>
                <p>Dias</p>
            </div>
            <div className="contador">
                <p className="number">20</p>
                <p>Horas</p>
            </div>
            <div className="contador">
                <p className="number">48</p>
                <p>Minutos</p>
            </div>
        </ContenedorContador>
    )
}

const ContenedorContador = styled.div`
    display:flex;
    justify-content:center;

    .contador{
        font-family: "Avant Garde", Avantgarde, "Century Gothic",
    CenturyGothic, "AppleGothic", sans-serif;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        margin:20px;
        background-color:#500606;
        background:linear-gradient(to top, transparent 10%, #dddddd 100%);
    }

    .number{
        font-size:120px;
    }

    p{
        font-size:30px;
        margin:5px;
    }
`

export default Contador