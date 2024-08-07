import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";


const URI = 'http://localhost:8000/horarios/'


function EditarHorarios(){
    
    const dias = [
        {id: 1,dia:"Lunes",},
        {id: 2,dia:"Martes"},
        {id: 3, dia:"Miercoles"},
        {id: 4,dia:"Jueves"},
        {id: 5,dia:"Viernes"},
        {id: 6,dia:"Sabado"},
        {id: 7,dia:"Domingo"}
    ]
    const [diaExpandido, setDiaExpandido] = useState(null);
    const [horarios, setHorarios] = useState([])
    
    useEffect(()=>{
         getHorarios()
    },[])
    
    const getHorarios = async ()=>{
        const res = await axios.get(URI)
        const horariosData = res.data
        const convertirHora = (hora) => {
            // Si la hora es solo un número (como "9"), convertirlo a minutos
            if (/^\d+$/.test(hora)) {
                return parseInt(hora) * 60;
            }

            // Si la hora está en formato "hh:mm", convertirla a minutos
            if (/^\d+:\d+$/.test(hora)) {
                const partes = hora.split(":");
                return parseInt(partes[0]) * 60 + parseInt(partes[1]);
            }

            // Manejar otros formatos si es necesario
            return 0; // Valor por defecto si no se puede convertir
        };

        // Ordenar los horarios por 'hora'
        horariosData.sort((a, b) => {
            // Verificar si las propiedades 'hora' existen
            if (!a.hora || !b.hora) {
                throw new Error('Propiedad "hora" faltante en uno de los objetos');
            }

            // Convertir las horas a un valor comparable
            const valorA = convertirHora(a.hora);
            const valorB = convertirHora(b.hora);

            // Comparar los valores convertidos
            return valorA - valorB;
        });

        // Hacer algo con los datos ordenados (por ejemplo, retornarlos o mostrarlos)
        setHorarios(horariosData)
    }

    const horariosPorDia = horarios.reduce((acc, horario) => {
        if (!acc[horario.dia]) acc[horario.dia] = [];
        acc[horario.dia].push(horario);
        return acc;
    }, {});
   
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

            <div className={`contenedor-principal ${Reservacion ? "inactivo" : ""}`}>
            {dias.map(dia => (
                <div key={dia.id} className="contenedor-dias">
                    <button 
                        id={dia.id} 
                        className="button-dropdown" 
                        onClick={() => setDiaExpandido(diaExpandido === dia.id ? null : dia.id)}
                    >
                        {dia.dia}
                    </button>
                    {diaExpandido === dia.id && (
                        <div className={`grilla-horarios`}>
                            {horariosPorDia[dia.dia]?.map(horario => (
                                <div key={horario.id} className={`div-edit-hora `}>
                                    <button onClick={handleReserva} className={`link-horario`} id={horario.id}>{horario.hora}</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
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

    .contenedor-principal{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        width:100%;
    }
    
    .contenedor-principal.inactivo{
        display:none;
    }

    .button-dropdown{
        background-color:black;
        color:white;
        border:0px;
        border-radius:5px;
        padding:10px;
        margin:5px;
        width:200px;
    }

    .grilla-horarios{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        width:100%;
        transition:5s;
    }

    .grilla-horarios.inactivo{
        display:none;
    }

    .link-horario{
        background-color:#00631c;
        text-decoration:none;
        text-align:center;
        width:200px;
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