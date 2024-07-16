import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";


const URI = 'http://localhost:8000/horarios/'


function EditarHorarios(){
    
    const [horarios, setHorarios] = useState([])
    
    useEffect(()=>{
         getHorarios()
    },[])
    
    const getHorarios = async ()=>{
        const res = await axios.get(URI)
        const horariosData = res.data;
        // Ordenar los horarios por 'hora'
        horariosData.sort((a, b) => a.hora - b.hora);
        setHorarios(horariosData);
    }
   
    const [ReservadoBtn, setReservadoBtn] = useState(true)

    const handleBtnReserva = (e)=> {
        setReservadoBtn(false)
        e.target.classList.toggle("btn-success")
        setTimeout(() => {
            // Aquí puedes agregar cualquier acción que deseas realizar después de 3 segundos
            setReservacion(false)
            e.target.classList.toggle("btn-success")
            setReservadoBtn(true)
          }, 3000);
    }

    const [Reservacion, setReservacion ] = useState(false)

    const handleReserva = (event) =>{
        if(event.target.classList.contains("reservado")){
            setReservacion(false)
            console.log("Ya esta reservado", Reservacion)
        }else{
            setReservacion(true)
            event.target.classList.toggle("reservado")
            console.log("Reservacion Completa", Reservacion)
        }
    }

    return(

        <ContenedorDivisor>
            <h1>Horarios Disponibles</h1>

            <div className={`grilla-horarios ${Reservacion ? "inactivo" : ""}`}>
                {horarios.map(horario => (
                <button onClick={handleReserva} className={`link-horario`} key={horario.id} id={horario.id}>{horario.hora}:00</button>
                )
                )}
            </div>

            <div className={`reservar-horario ${Reservacion ? "" : "inactivo"}`}>
                <div className="form-floating mb-2 mt-2 w-100">
                    <input
                    type="text"
                    className="form-control" 
                    id="#" 
                    placeholder=""
                    />
                    {/*errors.nombreVariedad?.type === "required" && <span>Debe ingresar nombre válido</span>}*/}
                    <label htmlFor="#">Nombre y Apellido</label>
                </div>
                <div className={`form-floating mb-2 mt-2 w-100`}>
                    <input
                    type="number"
                    className="form-control" 
                    id="#" 
                    placeholder=""
                    />
                    {/*errors.nombreVariedad?.type === "required" && <span>Debe ingresar nombre válido</span>}*/}
                    <label htmlFor="#">Telefono</label>
                </div>
                <button id="boton" onClick={handleBtnReserva} className="btn btn-primary">{ReservadoBtn ? "Reservar Turno" : "✅"}</button>
            </div>

        </ContenedorDivisor>

    )
}

const ContenedorDivisor = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    .grilla-horarios{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        width:100%;
        padding-right:30px;
        padding-left:30px;
    }

    .grilla-horarios.inactivo{
        display:none;
    }

    .link-horario{
        background-color:#00631c;
        text-decoration:none;
        text-align:center;
        width:100%;
        color:white;
        border:0px;
        border-radius:10px;
        padding:10px;
        margin:5px;
        font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
        letter-spacing:3px;
    }
    .link-horario.reservado{
        background-color:#2e0101;
    }

    .reservar-horario.inactivo{
        display:none;
    }

    .select{
        width:250px;
        margin:10px;
        padding:5px;
    }

    .select-horarios{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }
    .select-horarios.inactivo{
        display:none;
    }

    .btn-primary{
        width:100%;
    }

    .btn-success{
        transition:1.5s;
        opacity:1;
    }
`

export default EditarHorarios