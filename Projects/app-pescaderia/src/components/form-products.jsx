import React, {useState} from "react";
import styled from "styled-components";
import {useForm} from "react-hook-form"

function FormMarcas(){
    
    const [inputValue, setInputValue] = useState('');
    const [mostrarEditor, setMostrarEditor] = useState(false)
    const [click, setClicked] = useState(true)

    const handleChange = (event) => {
        if ( event.target.value === "0"){
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
    

    const handleCancelar = () =>{
        setMostrarEditor(false)
        document.getElementById("selectorProductos").selectedIndex = 0;
        document.getElementById("selectorMarcas").selectedIndex = 0;
        document.getElementById("selectorVariedad").selectedIndex = 0;
    }

    const handleClick = ()=>{
        setClicked(!click)
        setMostrarEditor(false)
        document.getElementById("selectorNewMarca").selectedIndex = 0;
        document.getElementById("selectorNewVariedad").selectedIndex = 0;
    }

    const {
        register,
        formState: { errors },
        handleSubmit,
        clearErrors
    } = useForm({ reValidateMode: "onSubmit" });

    const nombreVariedad = register("nombreVariedad", {
        required:true
    })

    const Save = () =>{
       const selectedItem = document.getElementById("selectorNewMarca").value

        if(selectedItem === "0"){
            alert("Complete todos los campos")
        }else{
            alert("Guardado con exito")
            handleClick()
        }
    }



    return(
        <ContenedorForm>
            <form onSubmit={handleSubmit}>


                <div className={`form-floating mb-2 mt-2 w-100 ${click ? "" : "inactivo"} `}>
                    <select onChange={handleChange} className="form-select" id="selectorProductos" >
                        <option value="0">Seleccione Variedad</option>
                        <option value="1">Pescado</option>
                        <option value="2">Hamburguesas</option>
                        <option value="3">Medallones</option>
                    </select>
                    <label htmlFor="marcas">Productos</label>
                </div>
                <div className={`form-floating mb-2 mt-2 w-100  ${mostrarEditor ? "" : "prueba"}`}>
                        <input
                        type="text"
                        onChange={handleInputChange}
                        value={inputValue}
                        className="form-control" 
                        id="#" 
                        />
                        {errors.nombreVariedad?.type === "required" && <span>Debe ingresar nombre válido</span>}
                        <label htmlFor="#">Nombre de Variedad</label>
                    </div>

                    <div className={`form-floating mb-2 mt-2 w-100 ${mostrarEditor ? "" : "prueba"} `}>
                    <select className="form-select" id="selectorMarcas" >
                        <option value="0">Seleccione Marca</option>
                        <option value="6">Grangys</option>
                        <option value="7">El Shaddai</option>
                        <option value="8">Punta Marina</option>
                    </select>
                    <label htmlFor="marcas">Marcas</label>
                </div>

                <div className={`form-floating mb-2 mt-2 w-100 ${mostrarEditor ? "" : "prueba"} `}>
                    <select className="form-select" id="selectorVariedad" >
                        <option value="0">Seleccione Variedad</option>
                        <option value="10">Pescado</option>
                        <option value="11">Hamburguesas</option>
                        <option value="12">Medallones</option>
                    </select>
                    <label htmlFor="marcas">Variedades</label>
                </div>


                <div className={`form-floating mb-2 mt-2 w-100 ${click ? "inactivo" : ""} `}>
                        <input
                        {...nombreVariedad}
                        type="text"
                        className="form-control" 
                        id="#"
                        placeholder="Nombre de Variedad"
                        onChange={(e) => {
                            nombreVariedad.onChange(e);
                            clearErrors("nombreVariedad");
                         }}
                        />
                        {errors.nombreVariedad?.type === "required" && <span>Debe ingresar nombre válido</span>}
                        <label htmlFor="#">Nombre de Variedad</label>
                    </div>

                <div className={`form-floating mb-2 mt-2 w-100 ${click ? "inactivo" : ""} `}>
                    <select className="form-select" id="selectorNewMarca" >
                        <option value="0">Seleccione Marca</option>
                        <option value="6">Grangys</option>
                        <option value="7">El Shaddai</option>
                        <option value="8">Punta Marina</option>
                    </select>
                    <label htmlFor="marcas">Marcas</label>
                </div>

                <div className={`form-floating mb-2 mt-2 w-100 ${click ? "inactivo" : ""} `}>
                    <select className="form-select" id="selectorNewVariedad" >
                        <option value="0">Seleccione Variedad</option>
                        <option value="10">Pescado</option>
                        <option value="11">Hamburguesas</option>
                        <option value="12">Medallones</option>
                    </select>
                    <label htmlFor="marcas">Variedades</label>
                </div>


            </form>


            <div className={`contenedor-buttons ${click ? "": "inactivo"} `}>
                <button href='/marcas/newmarca' onClick={handleClick} className={`btn btn-success m-1 ${mostrarEditor ? "inactivo": ""}`}>Nuevo</button>
                <button className={`btn btn-primary m-1 ${mostrarEditor ? "": "inactivo"}`}>Guardar</button>
                <button onClick={handleCancelar} className={`btn btn-danger m-1 ${mostrarEditor ? "": "inactivo"}`}>Cancelar</button>
            </div>
            <div className={`contenedor-modificacion ${click ? "activo": ""} `}>
                <button onClick={Save} className={`btn btn-primary m-1`}>Guardar</button>
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