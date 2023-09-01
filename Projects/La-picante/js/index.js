import {events} from "./data.js"

let carrito = [];

const eventproducts = document.getElementById("eventsProducts")
const verCarrito = document.getElementById("verCarrito")
const carritoContainer = document.getElementById("liCarrito")

events.forEach((product) =>{
   let content = document.createElement("div");
   content.className = "card bg-secondary p-2 m-3"
   content.innerHTML = `
             <img class="card-img-top mt-1 rounded-1" src="${product.img}" alt="Card image cap">
             <div class="card-body">
             <h5 class="card-title">${product.title}</h5>
             <p>${product.description}</p>
             <p class="precio"><strong>$${product.price}</strong></p>
             <input
             type="number"
             placeholder="0"
             min="0"
             max="100"
              id="number" />
             </div>
  `;

  let boton = document.createElement("button");
  boton.innerText = "Agregar al Carrito";
  boton.className = "btn btn-primary";
  content.append(boton);
  
  eventproducts.append(content);

  boton.addEventListener("click", ()=>{
   carrito.push({
     id : product.id,
     title: product.title,
     img : product.img,
     price: product.price,
   });
   Swal.fire({
    title: 'Añadido al carrito correctamente',
    background: 'rgb(70, 30, 30)',
    color : 'white',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#3085d6',
   })
   console.log(carrito)
  });
});

verCarrito.addEventListener("click",()=> {
  const alertCarrito = document.createElement("div")
  alertCarrito.className = "alert-header"
  alertCarrito.innerHTML =`
  <h2 class ="alert-title">Carrito</h2>
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
      <button>❌</button>
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
});




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