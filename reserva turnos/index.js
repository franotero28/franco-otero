import {days} from "/data.js"

const turnosLunes = document.getElementById("turnosLunes")
const boton = document.getElementById("botonLunes")
let botonPresionado = false;

boton.addEventListener("click", () => {
    if (!botonPresionado) {
        botonPresionado = true;
        days.forEach((turno) => {
            let content = document.createElement("div");
            content.className = "div-turnos";
            content.innerHTML = `
                <p>${turno.day}</p>
                <p>${turno.hour}hs</p>
            `;
            turnosLunes.append(content);

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
    turnosLunes.append(content)
})})*/