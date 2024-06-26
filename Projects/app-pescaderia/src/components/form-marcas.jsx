import React, {useState} from "react";
import styled from "styled-components";
import {useForm} from "react-hook-form"

function FormMarcas(){
    
    const [inputValue, setInputValue] = useState('');
    const [mostrarEditor, setMostrarEditor] = useState(false)
    const [click, setClicked] = useState(true)

    const handleChange = (event) => {
        if (event.target.value === "0"){
            setMostrarEditor(false)
        }
        else{
            setMostrarEditor(true)
            const selectedIndex = event.target.selectedIndex;
            const optionText = event.target.options[selectedIndex].text;

            setInputValue(optionText);
        }
    };


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
    const handleClick = ()=>{
        setClicked(!click)
        setMostrarEditor(false)
    }

    const {
        register,
        formState: { errors },
        handleSubmit,
        clearErrors
      } = useForm({ reValidateMode: "onSubmit" });

    const nombreMarca = register("nombreMarca", {
        required:true
    })

    return(
        <ContenedorForm>
            <form onSubmit={handleSubmit}>
                <div className={`form-floating mb-2 mt-2 w-100 ${click ? "" : "inactivo"} `}>
                    <select onChange={handleChange} className="form-select" id="usuario" >
                        <option value="0">Seleccione una Marca</option>
                        <option value="1">El Shaddai</option>
                        <option value="2">Grangys</option>
                        <option value="3">PuntaMarina</option>
                    </select>
                    <label htmlFor="marcas">Marcas</label>
                </div>
                <div className={`form-floating mb-2 mt-2 w-100  ${mostrarEditor ? "" : "prueba"}`}>
                        <input
                        type="text"
                        onChange={handleInputChange}
                        value={inputValue}
                        className="form-control" 
                        id="#" 
                        />
                        {errors.nombreMarca?.type === "required" && <span>Debe ingresar nombre válido</span>}
                        <label htmlFor="#">Nombre de Marca</label>
                    </div>
                <div className={`form-floating mb-2 mt-2 w-100 ${click ? "inactivo" : ""} `}>
                        <input
                        {...nombreMarca}
                        type="text"
                        className="form-control" 
                        id="#"
                        placeholder="Nombre de Marca"
                        onChange={(e) => {
                            nombreMarca.onChange(e);
                            clearErrors("nombreMarca");
                         }}
                        />
                        {errors.nombreMarca?.type === "required" && <span>Debe ingresar nombre válido</span>}
                        <label htmlFor="#">Nombre de Marca</label>
                    </div>
            </form>
            <div className={`contenedor-buttons ${click ? "": "inactivo"} `}>
                <button href='/marcas/newmarca' onClick={handleClick} className={`btn btn-success m-1 ${mostrarEditor ? "inactivo": ""}`}>Nuevo</button>
                <button className="btn btn-primary m-1">Guardar</button>
                <button className="btn btn-danger m-1">Cancelar</button>
            </div>
            <div className={`contenedor-modificacion ${click ? "activo": ""} `}>
                <button className="btn btn-primary m-1">Guardar</button>
                <button onClick={handleClick} className="btn btn-danger m-1">Cancelar</button>
            </div>
        </ContenedorForm>
    )
}

const ContenedorForm = styled.div`
    display:block;
    height:800px;
    margin:30px;
    padding:20px;
    background-color: rgba(33, 37, 41, 1 );
    width:80%;
    border-radius:10px;

    .btn.inactivo{
        display:none;
    }

    .form-floating.inactivo{
        position:absolute;
        top:-500px;
        opacity:0;
    }
    
    .form-floating.prueba{
        display:none;
    }

    .form-floating{
        transition:0.5s;
        opacity:1;
    }

    .contenedor-buttons{
        display:flex;
        justify-content:center;
        align-items:center;
        position:relative;
        transition:0.5s;
        left:0px;
    }

    .contenedor-buttons.inactivo{
        position:absolute;
        left:-500px;
        opacity:0;
    }

    .contenedor-modificacion{
        display:flex;
        justify-content:center;
        align-items:center;
        position:relative;
        left:0px;
        transition:0.5s ease-in-out;
        opacity:1;
    }

    .contenedor-modificacion.activo{
        position:relative;
        left:-500px;
        opacity:0;
    }
    span {
    font-size: 11px;
    padding:2px;
    color: #ca6b6b;
    }
`

export default FormMarcas