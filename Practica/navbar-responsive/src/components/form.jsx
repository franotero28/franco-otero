import "../css/formulario.css"
import {useForm} from "react-hook-form"
import styled from "styled-components"
import Usuarios from "./Usuario"

function Formulario(){

  const {register, handleSubmit, formState: {errors}} = useForm()
  const onSubmit = handleSubmit((data) => { 
    console.log(data)
  })

    return(
        <div className="contenedor-formulario">
            <form onSubmit={onSubmit}>
                    <img className="user-img" src={require("../img/2_.jpeg")} alt="" width={150} />
                <div className="form">
                    <div className="input-style">
                        <p className="icon-form">✉️</p>
                        <input placeholder="Correo Electronico" type="email" {...register("email", {
                            required:{
                                value: true,
                                message: "Debe ingresar un correo valido"
                            }
                            })}/>
                    </div>
                    {
                        errors.email && <span>{errors.email.message}</span>
                    }
                </div>
                <div className="form">
                    <div className="input-style">
                        <p className="icon-form">🔒</p>
                        <input placeholder="Contraseña" type="password" {...register("contraseña", {
                        required:{
                            value: true,
                            message: "Debe contraseña"
                        },
                            minLength: { 
                            value:5,
                            message: "La contraseña debe tener min 5 caracteres"},
                            maxLength:{
                            value:10,
                            message:"La contraseña debe tener max 20 caracteres"
                        }
                            })}/>
                    </div>
                    {
                        errors.contraseña && <span>Debe ingresar contraseña valida</span>
                    }
                </div>
                <BotonSubmit type="submit">➡️ Ingresar</BotonSubmit>
            </form>
        </div>
    );
}

const BotonSubmit = styled.button`
    font-size:16px;
    padding:10px;
    background-color:blue;
    border:0px;
    border-radius:5px;
    color:white;
    margin-top:10px;
`


export default Formulario