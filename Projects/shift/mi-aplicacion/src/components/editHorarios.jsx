import React, {useState, useEffect} from "react";
import { useNavigate} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";


const URI = 'http://localhost:8000/horarios/'

function EditarHorarios(){

    const [horarios, setHorarios] = useState([])

    const [hora, setHora] = useState("")

    const navigate = useNavigate()

    const [valorInput, setValorInput] = useState()
    const [valorCuarto, setValorCuarto] = useState()

    const handleInputChange = (event) =>{
            setValorInput(event.target.value)
    }

    const handleInputChange2 = (event) =>{
        setValorCuarto(event.target.value)
    }

     const addDia = () =>{

         if(valorCuarto == undefined || valorInput == undefined || valorInput == "" || valorCuarto == ""){
             alert("Selecciona hora valida")
         }else{
            let horaFinal = valorInput+":"+valorCuarto
            console.log(horaFinal)
            setHora(horaFinal)

         }
     } 
    
    const [advertencia, setAdvertencia] = useState(false)

    const handleDelete = () => {
        setAdvertencia(true);
        const timer = setTimeout(() => {
          setAdvertencia(false);
        }, 3500);
    
        // Limpiar el timer cuando el componente se desmonte
        return () => clearTimeout(timer);
    }

    useEffect(()=>{
         getHorarios()
    },[])
    
    const getHorarios = async ()=>{
        const res = await axios.get(URI)
        const horariosData = res.data;
        // Ordenar los horarios por 'hora'
        horariosData.sort((a, b) => {   
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
              
        // Convertir las horas a un valor comparable
        const valorA = convertirHora(a.hora);
        const valorB = convertirHora(b.hora);
              
        // Comparar los valores convertidos
        return valorA - valorB;
        });
        
    }

    const guardar = async (e) =>{
        await axios.post(URI, {hora: hora})
        navigate('/editar-horarios')
    } 

    const deleteHora = async (id) =>{
        axios.delete(`${URI}${id}`)
        navigate('/editar-horarios')
        alert("hora Eliminada")
        getHorarios()
    }

    return(
        <ContenedorDivisor>
            <h1>Editar Horarios</h1>
                <div className={`grilla-horarios`}>
                {horarios.map(horario => (
                    <div key={horario.id} className="div-edit-hora">
                        <button className={`link-horario`} key={horario.id} id={horario.id}>{horario.hora}:00</button>
                        <button className="btn btn-danger boton-eliminar" onClick={()=>{deleteHora(horario.id); handleDelete()}}>X</button>
                    </div>
                )
                )}
            </div>
            <button onClick={()=>{handleDelete(); addDia()}}>Prueba</button>
            <span className={`advertencia ${advertencia ? "" : "inactivo"}`}>Horario Eliminado Correctamente! ℹ️</span>
            <form onSubmit={guardar}>

            <select className="select" onChange={handleInputChange} name="" id="">

            <option value="">Seleccione hora</option> 
            <option value="8">8</option> 
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>

            </select>

            <select className="select" onChange={handleInputChange2} name="" id="">

            <option value="">Seleccione minutos</option>
            <option value="00">00</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>

            </select>

            <button className="btn btn-primary m-3" onClick={addDia}>Agregar Dia</button>
            <input type="number"
            value={hora}
            onChange={ (e)=> setHora(e.target.value)}
            />
            <label htmlFor="">Ingresar hora</label>
            <button className="btn btn-primary m-3">Crear Hora</button>
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

    .div-edit-hora{
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
    }

    .boton-eliminar{
    }

    .advertencia{
        padding:20px;
        border-radius:5px;
        background-color:#4b73e2;
        position:absolute;
        left:20px;
        top:80px;
        opacity:80%;
        color:white;
        transition:2s;
    }

    .advertencia.inactivo{
        position:absolute;
        left:-500px;
        opacity:0%;
    }

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

    .select-horarios{

    }
    .select-horarios.inactivo{
        display:none;
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