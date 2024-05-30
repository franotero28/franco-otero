import React from "react";
import styled from "styled-components";

function FormClientes(){
    return(
        <ContenedorFormulario>
        <div className="form-floating m-3 w-100">
            <select className="form-select" id="usuario" >
                <option value="0" selected></option>
                <option value="1">Pescado</option>
                <option value="2">Merluza</option>
                <option value="3">Rabas</option>
            </select>
            <label for="usuario">Tipo de Compra</label>
        </div>
        <div className="form-floating m-3 w-100">
            <input type="text" className="form-control" id="#" placeholder="Contraseña" />
            <label for="#">Nombre de Cliente</label>
        </div>
        <div className="form-floating m-3 w-100">
            <input type="number" className="form-control" id="#" placeholder="Contraseña" />
            <label for="#">Teléfono</label>
        </div>
        <div className="form-floating m-3 w-100">
            <input type="text" className="form-control" id="#" placeholder="Contraseña" />
            <label for="#">Dirección</label>
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

export default FormClientes