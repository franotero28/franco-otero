import {React, useState} from "react";
import styled from "styled-components";

function FormClientes(){

    const [click, setClicked] = useState(false)

    function handleClick(){
        setClicked(!click)
        if(click === true){ 
            console.log("es true", click)

        }
        else{
            console.log("es False", click)
        }
    }


    return(


        <ContenedorFormulario>
            <div className="form-floating m-2 w-100">
                <select className="form-select mb-3" id="usuario" >
                    <option value="0" selected></option>
                    <option value="1">Gustavo Fring</option>
                    <option value="2">Walter White</option>
                    <option value="3">Hank Schrader</option>
                </select>
                <label for="usuario">Seleccionar Cliente</label>
            </div>
                <div className={`contenedor-form-cliente ${click ? "activo": ""} `}>
                    <div className="form-floating m-3 w-100">
                        <input type="text" className="form-control" id="#" placeholder="Contraseña" />
                        <label for="#">Nombre de Cliente</label>
                    </div>
                    <div className="form-floating m-3 w-100">
                        <input type="number" className="form-control" id="#" placeholder="Contraseña" />
                        <label for="#">Teléfono</label>
                    </div>
                    <div className="form-floating mb-2 w-100">
                        <select className="form-select mb-3" id="usuario" >
                            <option value="0" selected></option>
                            <option value="1">Gustavo Fring</option>
                            <option value="2">Walter White</option>
                            <option value="3">Hank Schrader</option>
                        </select>
                        <label for="usuario">Provincia</label>
                    </div>
                    <div className="form-floating w-100">
                        <select className="form-select mb-3" id="usuario" >
                            <option value="1" selected>Gustavo Fring</option>
                            <option value="2">Walter White</option>
                            <option value="3">Hank Schrader</option>
                        </select>
                        <label for="usuario">Provincia</label>
                    </div>
                    <div className="form-floating m-3 w-100">
                        <input type="text" className="form-control" id="#" placeholder="Contraseña" />
                        <label for="#">Dirección</label>
                    </div>
                    <div className="form-floating m-3 w-100">
                        <input type="text" className="form-control" id="#" placeholder="Contraseña" />
                        <label for="#">CUIL/CUIT</label>
                    </div>
                    <div className="form-floating m-3 w-100">
                        <input type="text" className="form-control" id="#" placeholder="Contraseña" />
                        <label for="#">Saldo Inicial $</label>
                    </div>

                </div>
                <div className="contenedor-cliente">
                    <button onClick={handleClick} className="boton-form btn btn-success m-1">Agregar Nuevo</button>
                    <button className="boton-form btn btn-secondary m-1">Editar Cliente</button>
                    <button className="boton-form btn btn-danger m-1">Eliminar Cliente</button>
                    <button className="boton-form btn btn-primary m-1">Guardar Cliente</button>
                </div>
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

    .contenedor-cliente{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        align-items:center;
    }

    .contenedor-form-cliente.activo{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:100%;
        transition:0.5s ease-in-out;
        position:relative;
        top:0px;
        opacity:1;
    }
    .contenedor-form-cliente{
        position:absolute;
        top:-500px;
        opacity:0;
    }
    .boton-form{
        width:109px;
        font-size:12px;
    }
`

export default FormClientes