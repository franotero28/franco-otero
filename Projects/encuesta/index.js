const btnName = document.getElementById("btnName")
const input = document.getElementById("name")
const nombreContainer = document.getElementById("nombreContainer")
const eDatos = document.getElementById("eDatos")
const preg1 = document.getElementById("preg1")

import { questions } from "./data.js"

btnName.addEventListener("click", ()=>{
    let nombre = input.value
    input.value = ""
    nombreContainer.innerHTML = `${nombre}`
    eDatos.style.display = "none"
    preg1.style.display = "block"
})

questions.forEach((pregunta) =>{
    const title = document.createElement("li")
})
