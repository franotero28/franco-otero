import React, {useState, useEffect} from "react";
import { useNavigate} from "react-router-dom";
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
    
    
    const navigate = useNavigate()
    
    const [horarios, setHorarios] = useState([])
    const [hora, setHora] = useState("")
    const [diaExpandido, setDiaExpandido] = useState(null);
    const [valorInput, setValorInput] = useState("")
    const [valorCuarto, setValorCuarto] = useState("")
    const [advertenciaInput, setAdvertenciaInput] = useState(false)
    const [advertencia, setAdvertencia] = useState(false)
    const [diaSeleccionado, setDiaSeleccionado] = useState(dias[0].dia);
    
    const handleInputChange = (event) =>{ setValorInput(event.target.value) }
    const handleInputChange2 = (event) =>{ setValorCuarto(event.target.value)}
    const handleDiaChange = (event) =>{ setDiaSeleccionado(event.target.value)}

    const addDia = () =>{
        if(valorCuarto === undefined || valorInput === undefined || valorInput === "" || valorCuarto === ""){
            handleAdvertencia()
        }else{
            let horaFinal = valorInput+":"+valorCuarto
            setHora(horaFinal)
        }
    }

    const handleAdvertencia = () => {
        setAdvertenciaInput(true);
        const timer = setTimeout(() => {setAdvertenciaInput(false)}, 3500);
        return () => clearTimeout(timer);
    }

    const handleDelete = () => {
        setAdvertencia(true);
        const timer = setTimeout(() => {setAdvertencia(false)}, 3500);
        getHorarios()
        return () => clearTimeout(timer);
    }

    useEffect(()=>{
         getHorarios()
    },[diaSeleccionado])
    
    const getHorarios = async ()=>{
        const res = await axios.get(URI)
        const horariosData = res.data
        const convertirHora = (hora) => {
            if (/^\d+$/.test(hora)) {
                return parseInt(hora) * 60;
            }
            if (/^\d+:\d+$/.test(hora)) {
                const partes = hora.split(":");
                return parseInt(partes[0]) * 60 + parseInt(partes[1]);
            }
            return 0; 
        };
        horariosData.sort((a, b) => {
            if (!a.hora || !b.hora) {
                throw new Error('Propiedad "hora" faltante en uno de los objetos');
            }
            const valorA = convertirHora(a.hora);
            const valorB = convertirHora(b.hora);
            return valorA - valorB;
        });
        setHorarios(horariosData)
    }

    const guardar = async (e) =>{
        e.preventDefault()
        if(!hora || diaSeleccionado === ""){
            handleAdvertencia()
        }else{
            await axios.post(URI, {hora: hora, dia: diaSeleccionado})
            navigate('/editar-horarios')
            getHorarios()
        }
    } 
    
    const deleteHora = async (id) =>{
        await axios.delete(`${URI}${id}`)
        navigate('/editar-horarios')
        getHorarios()
    }

    const horariosPorDia = horarios.reduce((acc, horario) => {
        if (!acc[horario.dia]) acc[horario.dia] = [];
        acc[horario.dia].push(horario);
        return acc;
    }, {});

    return(
        <ContenedorDivisor>
            <h1>Editar Horarios</h1>
            <div className="contenedor-principal">
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
                                    <button className={`link-horario`} id={horario.id}>{horario.hora}</button>
                                    <button className="btn btn-danger boton-eliminar" onClick={() => { deleteHora(horario.id); handleDelete(); }}>X</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            </div>


            <span className={`advertencia ${advertencia ? "" : "inactivo"}`}>Horario Eliminado Correctamente! ℹ️</span>
            <span className={`advertencia-input ${advertenciaInput ? "" : "inactivo"}`}>Seleccione horario valido! ℹ️</span>

            <form onSubmit={guardar}>


            <select className="select" onChange={handleDiaChange} defaultValue={""} name="" id="">

            <option value="">Seleccione día</option> 
            <option value="Lunes">Lunes</option> 
            <option value="Martes">Martes</option>
            <option value="Miercoles">Miercoles</option>
            <option value="Jueves">Jueves</option>
            <option value="Viernes">Viernes</option>
            <option value="Sabado">Sabado</option>
            <option value="Domingo">Domingo</option>

            </select>

            <select className="select" onChange={handleInputChange} defaultValue={""} name="" id="">

            <option value="">Seleccione hora</option> 
            <option value="8">8</option> 
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>

            </select>

            <select className="select" onChange={handleInputChange2} name="" id="">

            <option value="">Seleccione minutos</option>
            <option value="00">00</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>

            </select>

            <button className="btn btn-primary m-3" onClick={()=>{addDia()}}>Agregar Horario</button>
            
            </form>
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

    .button-dropdown{
        background-color:black;
        color:white;
        border:0px;
        border-radius:5px;
        padding:10px;
        margin:5px;
        width:200px;
    }

    h1{
        font-family: 'Kanit', sans-serif;
        letter-spacing:5px;
        margin-bottom:10px;
    }

    .grilla-horarios{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        width:100%;
        transition:5s;
    }

    .div-edit-hora{
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
    }

    .boton-eliminar{
    }


    // MODALES DE NOTIFICACION 

    .advertencia{
        padding:18px;
        border-radius:5px;
        background-color:#4b73e2;
        position:absolute;
        left:18px;
        top:80px;
        opacity:100%;
        color:white;
        transition:2s;
    }

    .advertencia.inactivo{
        position:absolute;
        left:-500px;
        opacity:0%;
    }

    .advertencia-input{
        padding:20px;
        border-radius:5px;
        background-color:#000000;
        position:absolute;
        left:20px;
        top:80px;
        opacity:100%;
        color:white;
        transition:2s ease-in-out;
    }

    .advertencia-input.inactivo{
        position:absolute;
        left:-500px;
        opacity:0%;
    }

    .modal-agregado{
        padding:20px;
        border-radius:5px;
        background-color:#013b18;
        position:absolute;
        left:20px;
        top:80px;
        opacity:100%;
        color:white;
        transition:2s;
    }

    .modal-agregado.inactivo{
        position:absolute;
        left:-500px;
        opacity:0%;
    }

    // -----------------------------------

    .link-horario{
        background-color:#4b73e2;
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

    .select{
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        padding:10px;
        outline:0px;
        border:0.5px solid rgb(#4b73e2);
        border-radius:10px;
        margin:10px;
        width:250px;
    }

    form{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-top:20px;
    }
`

export default EditarHorarios