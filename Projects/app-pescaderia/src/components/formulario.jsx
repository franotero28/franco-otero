import React from "react";
import styled from "styled-components";

function Formulario(){

    const InputContraseña = document.getElementById("contraseña")
    console.log(InputContraseña)

    return(
        <ContenedorFormulario>
        <img className="img-login" src={require("../img/2_.jpeg")} alt="" />
        <div className="form-floating mb-2 mt-2 w-100">
            <select className="form-select" id="usuario" >
                <option value="1" selected>Leandro Alderete</option>
                <option value="2">Claudio Otero</option>
                <option value="3">Franco Otero</option>
            </select>
            <label for="usuario">Usuario</label>
        </div>
        <div className="form-floating m-3 w-100">
            <input type="password" className="form-control" id="contraseña" placeholder="Contraseña" />
            <label for="contraseña">Contraseña (min 6 caracteres)</label>
        </div> 
        <button type="submit" className="btn btn-primary m-3 w-100">Ingresar</button>
        </ContenedorFormulario>
    )
}

const ContenedorFormulario = styled.div`
    background-color: rgba(33, 37, 41, 1 );
    border-radius:20px;
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    max-width:400px;
    width:100%;
    margin:20px;

    .img-login{
        width:100px;
        border-radius:50px;
    }
    span {
    font-size: 11px;
    padding:2px;
    color: #ca6b6b;
}
`

export default Formulario