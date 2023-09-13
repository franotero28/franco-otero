import {daylun} from "/data.js"

const turnosLunes = document.getElementById("turnosLunes")
const boton = document.getElementById("botonLunes")
let botonPresionado = false;

boton.addEventListener("click", () => {
    if (!botonPresionado) {
        botonPresionado = true;
        daylun.forEach((turno) => {
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

import {daymar} from "/data.js"

const turnosMartes = document.getElementById("turnosMartes")
const boton1 = document.getElementById("botonMartes")
let botonPresionado1 = false;

boton1.addEventListener("click", () => {
    if (!botonPresionado1) {
        botonPresionado1 = true;
        daymar.forEach((turno) => {
            let content = document.createElement("div");
            content.className = "div-turnos";
            content.innerHTML = `
                <p>${turno.day}</p>
                <p>${turno.hour}hs</p>
            `;
            turnosMartes.append(content);

            let reservarbtn = document.createElement("button")
            reservarbtn.className = "btn btn-primary"
            reservarbtn.innerHTML= `Reservar`;
            reservarbtn.id = "1"
            content.append(reservarbtn)    
        });
    }
});

import {daymier} from "/data.js"

const turnosMiercoles = document.getElementById("turnosMiercoles")
const boton2 = document.getElementById("botonMiercoles")
let botonPresionado2 = false;

boton2.addEventListener("click", () => {
    if (!botonPresionado2) {
        botonPresionado2 = true;
        daymier.forEach((turno) => {
            let content = document.createElement("div");
            content.className = "div-turnos";
            content.innerHTML = `
                <p>${turno.day}</p>
                <p>${turno.hour}hs</p>
            `;
            turnosMiercoles.append(content);

            let reservarbtn = document.createElement("button")
            reservarbtn.className = "btn btn-primary"
            reservarbtn.innerHTML= `Reservar`;
            reservarbtn.id = "1"
            content.append(reservarbtn)    
        });
    }
});

import {dayjue} from "/data.js"

const turnosJueves = document.getElementById("turnosJueves")
const boton3 = document.getElementById("botonJueves")
let botonPresionado3 = false;

boton3.addEventListener("click", () => {
    if (!botonPresionado3) {
        botonPresionado3 = true;
        dayjue.forEach((turno) => {
            let content = document.createElement("div");
            content.className = "div-turnos";
            content.innerHTML = `
                <p>${turno.day}</p>
                <p>${turno.hour}hs</p>
            `;
            turnosJueves.append(content);

            let reservarbtn = document.createElement("button")
            reservarbtn.className = "btn btn-primary"
            reservarbtn.innerHTML= `Reservar`;
            reservarbtn.id = "1"
            content.append(reservarbtn)    
        });
    }
});

import {dayvier} from "/data.js"

const turnosViernes = document.getElementById("turnosViernes")
const boton4 = document.getElementById("botonViernes")
let botonPresionado4 = false;

boton4.addEventListener("click", () => {
    if (!botonPresionado4) {
        botonPresionado4 = true;
        dayvier.forEach((turno) => {
            let content = document.createElement("div");
            content.className = "div-turnos";
            content.innerHTML = `
                <p>${turno.day}</p>
                <p>${turno.hour}hs</p>
            `;
            turnosViernes.append(content);

            let reservarbtn = document.createElement("button")
            reservarbtn.className = "btn btn-primary"
            reservarbtn.innerHTML= `Reservar`;
            reservarbtn.id = "1"
            content.append(reservarbtn)    
        });
    }
});

/*boton.addEventListener("click", ()=> {
    daylun.forEach((turno) => {
    let content = document.createElement("div");
    content.className = "div-turnos"
    content.innerHTML = `
    <p style="margin-right:10px;">${turno.day}</p>
    <p>${turno.hour}hs</p>  
    `;
    turnosLunes.append(content)
})})*/