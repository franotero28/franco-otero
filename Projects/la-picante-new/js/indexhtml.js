AOS.init();

const crearCuenta = document.getElementById("crearCuenta")
const botonReserva = document.getElementById("boton-reserva")
const comprarEntradas = document.getElementById("comprarEntradas")

crearCuenta.addEventListener("click", ()=>{
  Swal.fire({
    title: 'Proximamente...',
    background: 'rgb(85, 28, 28)',
    color : 'white',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#3085d6',
   });
})


botonReserva.addEventListener("click", ()=>{
  console.log("se apreto el boton")
  let whpplink = "https://api.whatsapp.com/send?phone=2233048014&text=Hola,%20te%20escribo%20para%20reservar%20un%20turno%20para%20barberia"
  window.open(whpplink, '_blank');
})


comprarEntradas.addEventListener("click", ()=>{
  let whpplink = "https://api.whatsapp.com/send?phone=2233048014&text=Hola,%20te%20escribo%20para%20reservar%20un%20turno%20para%20barberia"
  window.open(whpplink, '_blank');
})