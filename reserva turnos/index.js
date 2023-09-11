import {days} from "/data.js"

const verTurnos = document.getElementById("verTurnos")
const boton = document.getElementById("mostrarTurnos")

boton.addEventListener("click", ()=>
days.forEach((turno) => {
    let content = document.createElement("div");
    content.innerHTML = ""
    content.className = "div-turnos"
    content.innerHTML = `
    <p style="margin-right:10px;">${turno.day}</p>
    <p>${turno.hour}hs</p>  
    `;
    verTurnos.append(content)
}))