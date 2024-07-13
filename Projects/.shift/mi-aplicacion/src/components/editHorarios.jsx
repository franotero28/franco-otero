import React, {useState, useEffect} from "react";
import styled from "styled-components";

function EditarHorarios(){

    const [horarios, setHorarios] = useState([
        {
            id: 1,
            hora:"9:30"
        },
        {
            id: 2,
            hora:"10:30"
        },
        {
            id: 3,
            hora:"11:30"
        },
        {
            id: 4,
            hora:"12:30"
        },
        {
            id: 5,
            hora:"13:30"
        },
    ])

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

            const cuarto = valorCuarto
            const numero = valorInput
            const hora = numero+":"+cuarto
            const newID = horarios.length + 1
    
            const nuevoElemento = ({ id: newID, hora: hora })
            setHorarios([...horarios, nuevoElemento])
            console.log(horarios)
        }
    } 
    

    useEffect(() => {
        const horariosOrdenados = [...horarios].sort((a, b) => {
          // Función para convertir la hora a un formato comparable
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
      
        setHorarios(horariosOrdenados);
      }, [horarios.length]);

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
              return true
          }
      }

    return(
        <ContenedorDivisor>
            <div className={`grilla-horarios ${Reservacion ? "inactivo" : ""}`}>
                {horarios.map(horario => (
                <button onClick={handleReserva} className={`link-horario`} key={horario.id} id={horario.id}>{horario.hora}</button>
                )
                )}
            </div>

            <div className={`select-horarios ${Reservacion ? "inactivo": ""}`}>

            <select onChange={handleInputChange} name="" id="">

                <option value="">Seleccione hora</option> 
                <option value="8">8</option> 
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>

            </select>

            <select onChange={handleInputChange2} name="" id="">

                <option value="">Seleccione minutos</option>
                <option value="00">00</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>

            </select>

            <button onClick={addDia}>Agregar Dia</button>

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

    .select-horarios{

    }
    .select-horarios.inactivo{
        display:none;
    }
`

export default EditarHorarios