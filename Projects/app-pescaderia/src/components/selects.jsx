import React, {useState, useEffect} from "react";
import styled from "styled-components";
import prov_ciud from '../prov_ciud_json.json'

function Selects() {

    const [idArticulos, setIdArticulos] = useState(0)
    const [defaultCiudad, setDefaultCiudad] = useState(null);

    useEffect(() => {
        // Encontrar el índice de la provincia que contiene la ciudad con ID 322
        const defaultIndex = prov_ciud.findIndex(prov => prov.ciudades.some(ciudad => ciudad.id === 322));
        if (defaultIndex !== -1) {
            setIdArticulos(defaultIndex);
            setDefaultCiudad(322);
        }
    }, []);

    const handlerCargarArticulos = function(e){
        const opcion = e.target.value

        setIdArticulos(opcion)
    }

    return (

        <ContenedorSelects>

            <div className="input-select form-floating w-100">
                <select id="provincia" className="form-select mb-3" onClick={handlerCargarArticulos} >
                    {
                        prov_ciud.map((item, i)=>(
                            <option key={"provincia"+i} value={i}>{item.nombre}</option>
                        ))
                    }
                </select>
                <label htmlFor="usuario">Provincia</label>
            </div>

            <div className="form-floating mb-2 w-100">
                <select id="ciudad" className="form-select mb-3">
                    {
                        idArticulos > -1 && 
                        (
                            prov_ciud[idArticulos].ciudades.map((item, i )=>(
                                <option key={"ciudad"+i} value={i} >{item.nombre}</option>
                            ))
                        )
                    }
                </select>
                <label htmlFor="ciudad">Ciudad</label>
            </div>

        </ContenedorSelects>
    )
}

const ContenedorSelects = styled.div`
    width:100%;
    .input-select{
        margin-bottom:30px;
        margin-top:10px;
    }
`

export default Selects

