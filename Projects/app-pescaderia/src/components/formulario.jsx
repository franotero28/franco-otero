import React from "react";
import styled from "styled-components";

function Formulario(){
    return(
        <ContenedorFormulario>
        <img className="img-login" src={require("../img/2_.jpeg")} alt="" />
        <div className="form-floating m-3 w-100">
            <select className="form-select" id="usuario" >
                <option value="0" selected></option>
                <option value="1">Leandro Alderete</option>
                <option value="2">Claudio Otero</option>
                <option value="3">Franco Otero</option>
            </select>
            <label for="usuario">Usuario</label>
        </div>
        <div className="form-floating m-3 w-100">
            <input type="password" className="form-control" id="#" placeholder="Contraseña" />
            <label for="#">Contraseña</label>
        </div>
        <button className="btn btn-primary m-3 w-100">Ingresar</button>
        </ContenedorFormulario>
    )
}

const ContenedorFormulario = styled.div`
    background-color: rgba(33, 37, 41, 1 );
    margin:30px;
    border-radius:20px;
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    
    .img-login{
        width:100px;
        border-radius:50px;
    }
`

export default Formulario