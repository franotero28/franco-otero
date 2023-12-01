import { articulos } from "./data-carga.js";

const divGaleria = document.getElementById("galeria")
const divModal = document.getElementById("modal")
let indice = 0

articulos.forEach((elemento) =>{
    const divArticulo = document.createElement("div")
    divArticulo.className = "div-articulo"
    divArticulo.id = indice++
    divArticulo.innerHTML = `
    <img class="img-articulo" src="${elemento.img}" width="150" height="160">
    <hr class="border border-1 opacity-100 w-100">
    <p class="nombre-articulo">${elemento.nombre} ${elemento.descripcion} </p>
    <p class="precio-articulo">$${elemento.precio}</p>
    `
    divGaleria.append(divArticulo)
    
    divArticulo.addEventListener("click", ()=>{
        const modal = document.createElement("div")
        modal.className= "ventana-modal"
        modal.innerHTML=`
        <img class="img-articulo" src="${elemento.img}" width="250" height="200">
        <p class="nombre-articulo">${elemento.nombre} ${elemento.descripcion} </p>
        <p class="precio-articulo">$${elemento.precio}</p>
        `
        divModal.append(modal)
    })
})
