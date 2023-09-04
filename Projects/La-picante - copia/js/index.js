import {events} from "./data.js"

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const eventproducts = document.getElementById("eventsProducts")
const verCarrito = document.getElementById("verCarrito")
const carritoContainer = document.getElementById("modal-container")

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

  let addtoCart = document.createElement("button");
  addtoCart.innerText = "Agregar al Carrito";
  addtoCart.className = "btn btn-primary";
  content.append(addtoCart);
  
  eventproducts.append(content);

  addtoCart.addEventListener("click", ()=>{

    const repeat = carrito.some((repeatProduct)=> repeatProduct.id === product.id);
    if(repeat){
      carrito.map((prod)=>{
        if(prod.id === product.id){
          prod.quantity++;
        }
      });
    }else{
   carrito.push({
     id : product.id,
     title: product.title,
     img : product.img,
     price: product.price,
     description: product.description,
     quantity: product.quantity,
   });
  }
   Swal.fire({
    title: 'Añadido al carrito correctamente',
    background: 'rgb(70, 30, 30)',
    color : 'white',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#3085d6',
   });
   console.log(carrito);
   saveLocal();
  });
});

  const pintarCarrito  = () => { 
  carritoContainer.style.display = "flex";
  const alertCarrito = document.createElement("div")
  alertCarrito.className = "alert-header"
  alertCarrito.innerHTML =`
  <h3 class ="alert-title">Carrito</h3>
 
  `;
  carritoContainer.innerHTML=` `
  carritoContainer.append(alertCarrito);

    const closeButton = document.createElement("button")
    closeButton.className = "btn btn-danger"
    closeButton.innerText = "❌"

    closeButton.addEventListener("click", () => {
      carritoContainer.style.display = "none"
    })

    alertCarrito.append(closeButton)

  carrito.forEach((product) =>{
    let carritoContent = document.createElement("li");
    carritoContent.innerHTML = ''
    carritoContent.className = "carrito-content"
    carritoContent.innerHTML = `
      <span class="restar">-</span>
      <p>${product.quantity}</p>
      <span class="sumar">+</span>
      <img src="${product.img}" width="30px">
      <p style="padding-right:15px; padding-left:10px;"><strong>${product.description}</strong></p>
      <p id="totalbuy"><strong>$${product.quantity * product.price}</strong></p>


    `;

    carritoContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar");
    restar.addEventListener("click", () =>{
      if(product.quantity !==1){
      product.quantity--
      saveLocal()
      }
      pintarCarrito()
    })

    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () =>{
      product.quantity++
      saveLocal()
      pintarCarrito();
    })


    let eliminar = document.createElement("span")
    eliminar.innerText = "X";
    eliminar.className = "delete-product";
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto)
  });
    const total = carrito.reduce((acc, el) => acc + el.price * el.quantity, 0);

  const totalBuying = document.createElement("div")
  totalBuying.className = "total-content p-2"
  totalBuying.innerHTML = `
  <p style="margin-bottom:0px;">Total a pagar:$ ${total}</p>
  `;
  carritoContainer.append(totalBuying)
};

verCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = () =>{
  const foundId = carrito.find((element)=> element.id);
  carrito = carrito.filter((carritoId)=>{
    return carritoId !== foundId;
  });
  saveLocal();
  pintarCarrito();
};

//set  item 
const saveLocal = () => { 
localStorage.setItem("carrito", JSON.stringify(carrito));
};
//get item




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