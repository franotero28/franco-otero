import React, { useState } from "react"
import styled from "styled-components"

let imprimirValor = ()=>{
    console.log("esto funciona")
}


function CrearBlog(){

    const contenido = document.getElementById("contenido")
    console.log(contenido)


    
    return(
        <ContenedorCrear>
                <div className="form-floating mb-2 w-100">
                    <input id="titulo" className="form-control" placeholder="Título"type="text" />
                    <label htmlFor="titulo">Título</label>
                </div>
                <div className="form-floating mb-2 w-100">
                    <input id="contenido" className="form-control" placeholder="Contenido" type="text" />
                    <label htmlFor="contenido">Contenido</label>
                </div>
                    <input id="titulo" placeholder="Título" type="image" />
                <button onClick={imprimirValor} className="btn btn-primary">Agregar Publicación</button>
        </ContenedorCrear>
    )
}

const ContenedorCrear = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:150px;
    flex-direction:column;
`

export default CrearBlog