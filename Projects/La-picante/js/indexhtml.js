AOS.init();

const botonReserva = document.getElementById("boton-reserva")

botonReserva.addEventListener("click", ()=>{
  console.log("se apreto el boton")
  let whpplink = "https://api.whatsapp.com/send?phone=2233048014&text=Hola,%20te%20escribo%20para%20reservar%20un%20turno%20para%20barberia"
  window.open(whpplink, '_blank');
})
