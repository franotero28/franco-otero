import {events} from "./data.js"


AOS.init();
let carrito = [];

const verCarrito = document.getElementById("verCarrito")
const carritoContainer = document.getElementById("liCarrito")
const eventproducts = document.getElementById("eventsProducts")
const botonReserva = document.getElementById("boton-reserva")

botonReserva.addEventListener("click", ()=>{
  console.log("se apreto el boton")
  let whpplink = "https://api.whatsapp.com/send?phone=2233048014&text=Hola,%20te%20escribo%20para%20reservar%20un%20turno%20para%20barberia"
  window.open(whpplink, '_blank');
})

events.forEach((product) =>{
   let content = document.createElement("div");
   content.className = "card bg-secondary p-2 m-3"
   content.innerHTML = `
             <img class="card-img-top mt-1 rounded-1" src="${product.img}" alt="Card image cap">
             <div class="card-body">
             <h5 class="card-title">${product.title}</h5>
             <p>${product.description}</p>
             <p class="precio"><strong>$${product.price}</strong></p>
             </div>
  `;

  let boton = document.createElement("a");
  boton.innerText = "Comprar Entradas";
  boton.className = "btn btn-primary"
  boton.id = "wppbutton"
  content.append(boton);
  
  eventproducts.append(content);

  boton.addEventListener("click",() =>{
    let wpplink = "https://api.whatsapp.com/send?phone=2233006071&text=Hola,%20te%20escribo%20para%20comprar%20una%20entrada%20de%20LA%20PICANTE"
    window.open(wpplink, '_blank');
  } )
 /* boton.addEventListener("click", ()=>{
   carrito.push({
     id : product.id,
     title: product.title,
     img : product.img,
     price: product.price,
   });
   console.log(carrito)
  });
  */
});

/*--------JS Carrito----------*/

  verCarrito.addEventListener("click", () =>{
  const alertCarrito = document.createElement("div")
  alertCarrito.className = "alert-header"
  alertCarrito.innerHTML =`
  <h3 class ="alert-title">Carrito</h3>
  `;
  carritoContainer.innerHTML=` `
  carritoContainer.append(alertCarrito);

  const carritoButton = document.createElement("button")
    carritoButton.innerText = "❌";
    carritoButton.className = "btn btn-secondary p-1 m-1";

  alertCarrito.append(carritoButton);


  carrito.forEach((product) =>{
    let carritoContent = document.createElement("li");
    carritoContent.innerHTML = ''
    carritoContent.className = "carrito-content"
    carritoContent.innerHTML = `
      <img src="${product.img}" width="80">
      <p><strong>$${product.price}</strong></p>
    `;

    carritoContainer.append(carritoContent)
  });

  const total = carrito.reduce((acc, el) => acc + el.price, 0);

  const totalBuying = document.createElement("div")
  totalBuying.className = "total-content mt-1 p-2"
  totalBuying.innerHTML = `
  <p style="margin-bottom:0px;"><strong>Total a pagar:$ ${total}</strong></p>
  `;
  carritoContainer.append(totalBuying)
})



/*let cantidades = document.getElementById("number")
let mostrarValor = document.getElementById("mostrarValor")
mostrarValor.addEventListener("click", ()=>{
  let cantidad = cantidades.value ;
  console.log("el valor del input es " + cantidad)
})*/



/*
const fragment = document.createDocumentFragment()
const cardProductTemplate = document.getElementById(
  'card-product-template'
).content;

document.getElementById('products_list').addEventListener('click', (e) => {
  const node = e.target;
  if (node.classList.contains('btn')) {
    alert(
      `soy el producto: ${node.dataset.productname} y mi id es: ${node.dataset.id}`
    );
  }
});

events.forEach((product) => {
  cardProductTemplate.querySelector('img').src = product.thumbnail;
  cardProductTemplate.querySelector('img').alt = product.title;
  cardProductTemplate.querySelector('.card-title').innerText = product.title;
  cardProductTemplate.querySelector('.card-text').innerText = product.title;
  cardProductTemplate
    .querySelector('button')
    .setAttribute('data-productName', product.title);
  cardProductTemplate
    .querySelector('button')
    .setAttribute('data-id', product.id);

  const clone = cardProductTemplate.cloneNode(true);
  fragment.appendChild(clone);
});

main.appendChild(fragment); */