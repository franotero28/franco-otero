import {events} from "./data-eventos.js"
AOS.init();
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const eventproducts = document.getElementById("eventsProducts")
const verCarrito = document.getElementById("verCarrito")
const carritoContainer = document.getElementById("modal-container")

events.forEach((product) =>{
   let content = document.createElement("div");
   content.className = "eventos-picante"
   content.innerHTML = `
             <img src="${product.img}" alt="evento">
             <h6 class="h-titulo p-2">${product.title}</h6>
            <div class="info-hour">
              <p class="hour">${product.date}</p>
              <p class="hour">${product.dia}</p>
              <p class="hour">${product.hour}</p>
              </div>
             <p class="hour">${product.place}</p>
             <p class="hour">${product.description}</p>
             <p class="hour"><strong>$${product.price}</strong></p>
  `;

  let addtoCart = document.createElement("button");
  addtoCart.innerText = "Agregar al Carrito";
  addtoCart.className = "boton-carrito";
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
    closeButton.innerText = "X"

    closeButton.addEventListener("click", () => {
      carritoContainer.style.display = "none"
    })

    alertCarrito.append(closeButton)

  carrito.forEach((product) =>{
    let carritoContent = document.createElement("li");
    carritoContent.innerHTML = ''
    carritoContent.className = "carrito-content"
    carritoContent.innerHTML = `
      <button class="restar btn btn-danger">-</button>
      <p>${product.quantity}</p>
      <button class="sumar btn btn-primary">+</button>
      <img src="${product.img}" width="30px">
      <p style="padding-right:15px; padding-left:10px;"><strong>${product.title}</strong></p>
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


    let eliminar = document.createElement("button")
    eliminar.style.fontSize = "small"
    eliminar.innerText = "🗑";
    eliminar.className = "delete-product btn btn-danger";
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

  const pagar = document.createElement("button")
  pagar.className = "btn btn-primary"
  pagar.innerText = "Comprar"
  totalBuying.append(pagar)

  pagar.addEventListener("click",() =>{
    let wpplink = "https://api.whatsapp.com/send?phone=2233048014&text=Hola,%20te%20escribo%20para%20comprar%20%20entradas%20de%20LA%20PICANTE"
    window.open(wpplink, '_blank');
  })


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