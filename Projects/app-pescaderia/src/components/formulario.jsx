import React from "react";
import styled from "styled-components";
import {useForm} from "react-hook-form"

function Formulario(){

    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = handleSubmit((data) => { 
        console.log(data)
      })

    return(
        <ContenedorFormulario onSubmit={onSubmit}>
        <img className="img-login" src={require("../img/2_.jpeg")} alt="" />
        <form onSubmit={onSubmit}>
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
            <input type="password" className="form-control" id="contraseña" placeholder="Contraseña"{...register("password", {
                        required:{
                            value: true,
                            message: "Debe ingresar contraseña valida"
                        },
                        minLength: { 
                        value:6,
                        message: "La contraseña debe tener min 6 caracteres"},
                        maxLength:{
                        value:10,
                        message:"La contraseña debe tener max 10 caracteres"
                        }
                    })} />
                    {
                        errors.password && <span>{errors.password.message}</span>
                    }
            <label for="contraseña">Contraseña (min 6 caracteres)</label>
        </div> 
        <button type="submit" className="btn btn-primary m-3 w-100">Ingresar</button>
        </form>
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
    
    form{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

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