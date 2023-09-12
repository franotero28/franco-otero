import {days} from "/data.js"

<<<<<<< HEAD
const turnosLunes = document.getElementById("turnosLunes")
const boton = document.getElementById("botonLunes")
=======
const Turnos = document.getElementById("Turnos")
const boton = document.getElementById("mostrarTurnos")
>>>>>>> a0c2b713f7f5ce62683cb74d4de85c9f497cb960
let botonPresionado = false;

boton.addEventListener("click", () => {
    if (!botonPresionado) {
        botonPresionado = true;
        days.forEach((turno) => {
            let content = document.createElement("div");0
            content.className = "div-turnos";
            content.innerHTML = `
                <p>${turno.day}</p>
                <p>${turno.hour}hs</p>
            `;
<<<<<<< HEAD
            turnosLunes.append(content);
=======
            Turnos.append(content);
>>>>>>> a0c2b713f7f5ce62683cb74d4de85c9f497cb960

            let reservarbtn = document.createElement("button")
            reservarbtn.className = "btn btn-primary"
            reservarbtn.innerHTML= `Reservar`;
            reservarbtn.id = "1"
            content.append(reservarbtn)    
        });
    }
});

/*boton.addEventListener("click", ()=> {
    days.forEach((turno) => {
    let content = document.createElement("div");
    content.className = "div-turnos"
    content.innerHTML = `
    <p style="margin-right:10px;">${turno.day}</p>
    <p>${turno.hour}hs</p>  
    `;
<<<<<<< HEAD
    turnosLunes.append(content)
=======
    Turnos.append(content)
>>>>>>> a0c2b713f7f5ce62683cb74d4de85c9f497cb960
})})*/