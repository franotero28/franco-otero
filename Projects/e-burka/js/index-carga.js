import { articulos } from "./data-carga.js";

const divGaleria = document.getElementById("galeria")
let indice = 0

articulos.forEach((elemento) =>{
    const divArticulo = document.createElement("div")
    divArticulo.className = "div-articulo"
    divArticulo.id = indice++
    divArticulo.innerHTML = `
    <img class="img-articulo" src="${elemento.img}" width="250" height="200 ">
    <hr class="border border-1 opacity-100 w-100">
    <p class="nombre-articulo">${elemento.nombre} ${elemento.descripcion} </p>
    <p class="precio-articulo">$${elemento.precio}</p>
    `
    divGaleria.append(divArticulo)

    divArticulo.addEventListener("click", ()=>{
        alert("estas seguro q queres comprar esta poronga? hijo de re mil puta")
    })
})


