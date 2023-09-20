import {articulos} from "./data-catalogo.js"

const articulosGaleria = document.getElementById("articulosGaleria")

articulos.forEach((articulo) =>{
    let card = document.createElement("div")
    card.className = "card bg-secondary p-2 m-3"
    card.innerHTML = `
    <img class="card-img-top mt-1 rounded-1" src="${articulo.img}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${articulo.title}</h5>
    <p class="precio"><strong>$${articulo.price}</strong></p>
    </div>
    `
    articulosGaleria.append(card)
});
