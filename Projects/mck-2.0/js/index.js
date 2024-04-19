const botonArchivos = document.getElementById("botonArchivos")
const divMaterial = document.getElementById("contenedor4")

import { archivos } from "./data.js";



botonArchivos.addEventListener("click", ()=> {
    let contenedorArchivos = document.createElement("div");
    divMaterial .innerHTML = ` `
    contenedorArchivos.className= "contenedor-archivos";

    divMaterial.append(contenedorArchivos);

    archivos.forEach((archivos) =>{
        const contenedorMaterial = document.createElement("div")
        contenedorMaterial.className = "contenedor-material"
        contenedorMaterial.innerHTML = `
        <h6>Archivos ${archivos.nombre}</h6>
        <p style="font-size: 100px; cursor: pointer;">📄</p>
        <a class="boton-descarga" target="_blank" href="${archivos.descarga}" download>Descargar</a>`

      contenedorArchivos.append(contenedorMaterial);
    })
})

const header = document.getElementById("Header")

window.addEventListener("scroll",() =>{
  console.log("hola")
})