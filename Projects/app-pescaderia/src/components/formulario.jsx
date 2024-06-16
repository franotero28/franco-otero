import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import {useForm} from "react-hook-form"

function Formulario(){
  const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
        clearErrors
      } = useForm({ reValidateMode: "onSubmit" });
      const onSubmit = () => {
        // Maneja la lógica de envío del formulario aquí
        // Por ejemplo, puedes hacer una solicitud a tu servidor
        // Después de que la solicitud se haya completado correctamente, redirige a la ruta deseada
        // Por ahora, solo vamos a redirigir directamente después de enviar el formulario
        navigate("/clientes")
      }
      const password = register("password", { required: {value: true} , minLength: {value: 6 }});
      return (
        <ContenedorFormulario>
        <img className="img-login mb-3" src={require("../img/2_.jpeg")} alt="" />
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating mb-2 mt-2 w-100">
            <select className="form-select" id="usuario" >
                <option value="1">Leandro Alderete</option>
                <option value="2">Claudio Otero</option>
                <option value="3">Franco Otero</option>
            </select>
            <label htmlFor="usuario">Usuario</label>
        </div>
        <div className="form-floating m-3 w-100"> 
          <input type="password" className="form-control" id="contraseña" placeholder="Contraseña" maxLength="10"
            {...password}
            onChange={(e) => {
              password.onChange(e);
              clearErrors("password");
            }}
          />
          {errors.password?.type === "required" && <span>Debe ingresar una contraseña valida</span>}
          {errors.password?.type === "minLength" && <span>Debe tener al menos 6 caracteres</span>}
          <label htmlFor="contraseña">Contraseña (min 6 caracteres)</label>
        </div>   
        <button type="submit" className="btn btn-primary m-3 w-100">Ingresar</button>
        </form>
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
    form{
        max-width:400px;
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