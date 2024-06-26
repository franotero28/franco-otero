import {React, useState} from "react";
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Selects from "./selects";

function FormClientes(){

    const [click, setClicked] = useState(false)

    function handleClick(){
        setClicked(!click)
    }

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

    const cuilFormat = /^\d{2}-\d{8}-\d{1}$/;
    const cuil = register("cuil", {
        required:true,
        pattern:{
            value:cuilFormat,
            message:"Por favor ingresa un CUIL/CUIT válido en el formato XX-XXXXXXXX-X"
        }
    })
    const nombreCliente = register("nombreCliente", {
        required:true
    })
    const email = register("email", {
        required:true
    })

    const validateInput = (value) => {
        // Verificar si el valor contiene caracteres no deseados
        if (value.includes('-') || value.includes('.')) {
          return "El número no puede contener - o .";
        }
        return true;
      };
    
    
    const telefono = register("telefono", {
        required:true,
        maxLength:10,
        validate: validateInput
    })
    const direccion = register("direccion", {
        required:true
    })

    return(


        <ContenedorFormulario>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-floating m-2">
                <select className="form-select mb-3" id="usuario" >
                    <option value="1">Gustavo Fring</option>
                    <option value="2">Walter White</option>
                    <option value="3">Hank Schrader</option>
                </select>
                <label htmlFor="usuario">Seleccionar Cliente</label>
            </div>
                <div className={`contenedor-form-cliente ${click ? "activo": ""} `}>
                    <div className="form-floating m-3 w-100">
                        <input
                        {...nombreCliente}
                        type="text"
                         className="form-control" 
                         id="#" 
                         placeholder="Contraseña"
                         onChange={(e) => {
                        cuil.onChange(e);
                        clearErrors("nombreCliente");
                         }}
                        />
                        {errors.nombreCliente?.type === "required" && <span>Debe ingresar nombre válido</span>}
                        <label htmlFor="#">Nombre de Cliente</label>
                    </div>
                    <div className="form-floating m-3 w-100">
                        <input
                        {...email}
                        type="text"
                         className="form-control" 
                         id="#" 
                         placeholder="Correo Electrónico"
                         onChange={(e) => {
                        email.onChange(e);
                        clearErrors("email");
                         }}
                        />
                        {errors.email?.type === "required" && <span>Debe ingresar correo electronico válido</span>}
                        <label htmlFor="#">Correo Electrónico</label>
                    </div>
                    <div className="form-floating m-3 w-100">
                        <input
                        {...telefono}
                        type="number" 
                        placeholder="Teléfono (código de área sin el 15)"
                        className="form-control" 
                        id="#"
                        onInput={(e) => {
                            if ((e.target.value.length > e.target.maxLength))
                            e.target.value = e.target.value.slice(0,e.target.maxLength);
                        }}
                        maxLength={10}
                        onChange={(e) => {
                        telefono.onChange(e);
                        clearErrors("telefono")
                        }}
                        />
                        {errors.telefono?.type === "required" && <span>Debe ingresar teléfono válido</span>}
                        {errors.telefono?.type === "validate" && <span>Debe ingresar telefono con formato valido</span>}
                        <label htmlFor="#">Teléfono (código de área sin el 15) </label>
                    </div>
                    <Selects />
                    <div className="form-floating m-3 w-100">
                        <input 
                        {...direccion}
                        type="text" 
                        className="form-control" 
                        id="#"  
                        placeholder="Contraseña"
                        onChange={(e) => {
                        direccion.onChange(e);
                        clearErrors("direccion");
                        }}
                        />
                        {errors.direccion?.type === "required" && <span>Debe ingresar dirección válida</span>}
                        <label htmlFor="#">Dirección</label>
                    </div>
                    <div className="form-floating m-3 w-100">
                        <input
                            {...cuil}
                            type="text" 
                            className="form-control" 
                            id="#" 
                            placeholder="CUIL/CUIT"
                            maxLength={13}
                            onChange={(e) => {
                            cuil.onChange(e);
                            clearErrors("cuil");
                         }} />
                        {errors.cuil?.type === "required" && <span>Debe ingresar una CUIL/CUIT válido</span>}
                        {errors.cuil?.type === "pattern" && <span>Por favor ingresa un CUIL/CUIT válido en el formato XX-XXXXXXXX-X</span>}
                        <label htmlFor="#">CUIL/CUIT</label>
                    </div>

                </div>
                <div className="contenedor-cliente">
                    <button onClick={handleClick} className="boton-form btn btn-success m-1">Agregar Nuevo</button>
                    <button className="boton-form btn btn-secondary m-1">Editar Cliente</button>
                    <button className="boton-form btn btn-danger m-1">Eliminar Cliente</button>
                    <button onClick={onSubmit} className="boton-form btn btn-primary m-1">Guardar Cliente</button>
                </div>
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
        width:100%;
    }

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
    span {
    font-size: 11px;
    padding:2px;
    color: #ca6b6b;
    }
`

export default FormClientes