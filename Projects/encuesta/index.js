const btnName = document.getElementById("btnName")
const input = document.getElementById("name")
const nombreContainer = document.getElementById("nombreContainer")
const eDatos = document.getElementById("eDatos")
const preg1 = document.getElementById("preg1")

import { questions } from "./data.js"

btnName.addEventListener("click", ()=>{
    let nombre = input.value
    if(nombre === ""){
        alert("Ingrese nombre valido")
    }
    else{ 
    nombreContainer.innerHTML = `${nombre}`
    eDatos.style.display = "none"
    preg1.style.display = "block"
    }
});

questions.forEach((pregunta) =>{
    const preguntas = document.createElement("h6")
    preguntas.className = "text-center"
    preguntas.innerHTML = `${pregunta.question}`
    const liPreguntas = document.createElement("ul")
    liPreguntas.className = "ul-preguntas"
    liPreguntas.innerHTML = 
    `<li class="option"><button class="btn btn-primary p-2 m-1" id="1">${pregunta.option1}</button><input class="form-check-input" type="checkbox" value="" id="myCheck1"></li>
    <li class="option"><button class="btn btn-primary p-2 m-1" id="2">${pregunta.option2}</button><input class="form-check-input" type="checkbox" value="" id="myCheck2"></li>
    <li class="option"><button class="btn btn-primary p-2 m-1" id="3">${pregunta.option3}</button><input class="form-check-input" type="checkbox" value="" id="myCheck3"></li>`

    preg1.append(preguntas, liPreguntas)
});

const checkbox1 = document.getElementById("myCheck1")
const checkbox2 = document.getElementById("myCheck2")
const checkbox3 = document.getElementById("myCheck3")

checkbox1.addEventListener("click", () =>{
    checkbox2.checked = false
    checkbox3.checked = false
})

checkbox2.addEventListener("click", () =>{
    checkbox1.checked = false
    checkbox3.checked = false
})

checkbox3.addEventListener("click", () =>{
    checkbox1.checked = false
    checkbox2.checked = false
})