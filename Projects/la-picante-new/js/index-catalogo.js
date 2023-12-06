import {articulos} from "./data-catalogo.js"
AOS.init();

const articulosGaleria = document.getElementById("articulosGaleria")
let indice = 0


articulos.forEach((elemento) =>{
    const divArticulo = document.createElement("div")
    divArticulo.className = "div-articulo"
    divArticulo.id = indice++
    divArticulo.innerHTML = `
    <img class="img-articulo" src="${elemento.img}" height="160">
    <hr class="border border-1 opacity-100 w-100">
    <p class="nombre-articulo">${elemento.title}</p>
    <p class="precio-articulo">$${elemento.price}</p>
    `
    articulosGaleria.append(divArticulo)
    
    divArticulo.addEventListener("click", ()=>{
        // Eliminar el modal existente si hay uno
        const modalExistente = document.querySelector(".div-modal");
        if (modalExistente) {
        modalExistente.remove();
        }
        const modal = document.createElement("div");
        modal.className = "div-modal"
        const modalHeader = document.createElement("div")
        modalHeader.className = "modal-h"
        modalHeader.innerHTML =`
        <img src="/img/logo-zeus-horizontal.png" width="200"><button class="btn-cerrar btn btn-danger" id="cerrarModal">x</button>`

        const modalContent = document.createElement("div")
        modalContent.className= "ventana-modal"
        modalContent.innerHTML=`
        <img class="img-articulo" src="${elemento.img}" width="250" height="210">
        <div class="descripcion-modal">
        <p class="nombre-modal">${elemento.nombre} ${elemento.descripcion} </p>
        <p class="precio-modal">$${elemento.precio}</p>
        <button class="btn btn-light">Comprar</button>
        </div>
        `
        modal.append(modalHeader)
        modal.append(modalContent)
        divModal.append(modal)

        const cerrarModal = document.getElementById("cerrarModal");
        cerrarModal.addEventListener("click", () => {
        modal.remove(); // Elimina el modal actual en lugar de ocultarlo

        let botoncompra = document.createElement("button")
        botoncompra.className = "btn btn-danger"
        botoncompra.innerText = "Comprar"
    
        card.append(botoncompra);
    
        botoncompra.addEventListener("click", () => {
            let wpplink = "https://api.whatsapp.com/send?phone=2233006071&text=Hola,%20te%20escribo%20para%20comprar%20un%20articulo%20de%20LA%20PICANTE"
            window.open(wpplink, '_blank'); 
        })
        });
    })
})


