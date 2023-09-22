import {articulos} from "./data-catalogo.js"
AOS.init();
const articulosGaleria = document.getElementById("articulosGaleria")

articulos.forEach((articulo) =>{
    let card = document.createElement("div")
    card.className = 'card bg-black p-2 m-3'
    card.innerHTML = `
    <img data-aos="zoom-out" class="card-img-top mt-1 rounded-1" src="${articulo.img}" alt="Card image cap">
    <div data-aos="zoom-in" class="card-body">
    <h5 class="card-title">${articulo.title}</h5>
    <p class="precio"><strong>$${articulo.price}</strong></p>
    </div>
    `
    articulosGaleria.append(card);

    let botoncompra = document.createElement("button")
    botoncompra.className = "btn btn-danger"
    botoncompra.innerText = "Comprar"

    card.append(botoncompra);
});
