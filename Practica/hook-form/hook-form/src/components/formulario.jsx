import "../css/formulario.css"
import {useForm} from "react-hook-form"

function Formulario(){

  const {register, handleSubmit, formState: {errors}} = useForm()
  const onSubmit = handleSubmit((data) => { 
    console.log(data)
  })

    return(
        <div className="contenedor-formulario">
            <div className="formulario-header">
              <h2>Formulario</h2>
            </div>
            <form onSubmit={onSubmit}>
                <div className="form">
                    <label>Nombre de usuario</label>
                    <input type="text" name="" {...register("usuario", {
                        required:{
                            value: true,
                            message: "Debe ingresar nombre de usuario"
                        },
                        minLength: { 
                        value:5,
                        message: "El usuario debe tener min 5 caracteres"},
                        maxLength:{
                        value:20,
                        message:"El usuario debe tener max 20 caracteres"
                        }
                    })} />
                    {
                        errors.usuario && <span>{errors.usuario.message}</span>
                    }
                </div>
                <div className="form">
                    <label>Contraseña</label>
                    <input type="password" {...register("contraseña", {required: true})}/>
                    {
                        errors.contraseña && <span>Debe ingresar contraseña valida</span>
                    }
                </div>
                <div className="form">
                    <label>Confirmar contraseña</label>
                    <input type="password" {...register("confirmarContraseña", {required: true}
                    )}/>
                    {
                        errors.contraseña && <span>Debe ingresar contraseña valida</span>
                    }
                </div>
                <div className="form">
                    <label>Correo Electronico</label>
                    <input type="email" {...register("email", {
                        required:{
                            value: true,
                            message: "Debe ingresar un correo valido"
                        }
                        })}/>
                    {
                        errors.email && <span>{errors.email.message}</span>
                    }
                </div>
                <div className="form">
                    <label>Edad</label>
                    <input type="date" {...register("fechaNacimiento", {required:{
                        value: true,
                        message: "Ingresar fecha valida"
                    },
                    validate: (value) => {
                        const diaNacimiento = new Date(value)
                        const diaActual = new Date()
                        const edad = diaActual.getFullYear()- diaNacimiento.getFullYear()
                        
                        if (edad >= 18){
                            return true
                        }
                        else{
                            return "Debe ser mayor de edad"
                        }
                    }
                    })} />
                    {
                        errors.fechaNacimiento && <span>{errors.fechaNacimiento.message}</span>
                    }
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default Formulario