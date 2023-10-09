const btnName = document.getElementById("btnName")
const input = document.getElementById("name")
const nombreContainer = document.getElementById("nombreContainer")
const eDatos = document.getElementById("eDatos")
const preg1 = document.getElementById("preg1")
const enviarR = document.getElementById("Submit")

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
    enviarR.style.display = "block"    
    }
});

questions.forEach((pregunta, index) =>{

    const preguntas = document.createElement("h6")
    preguntas.className = "text-center"
    preguntas.innerHTML = `${pregunta.question}`

    const liPreguntas = document.createElement("ul")
    liPreguntas.className = "ul-preguntas"
    liPreguntas.innerHTML = 

    `<li class="option"><input type="radio" class="${index + 1 }" name="q${index + 1}" value="${pregunta.option1}">${pregunta.option1}</li>
    <li class="option"><input type="radio" class="${index + 1 }" name="q${index + 1}" value="${pregunta.option2}">${pregunta.option2}</li>
    <li class="option"><input type="radio" class="${index + 1 }" name="q${index + 1}" value="${pregunta.option3}">${pregunta.option3}</li>`

    preg1.append(preguntas, liPreguntas)
});
const enviarRespuestas = document.getElementById("Submit")
const respuestas1 = document.querySelectorAll("input[type='radio'][name='q1']")

enviarRespuestas.addEventListener("click", () =>{
    respuestas1.forEach((checkbox) =>{
        let indicecorrect = 0
        let indiceincorrect = 0
        if (checkbox.checked){
            if(checkbox.value == "La Picante"){
                indicecorrect = indicecorrect + 1
                console.log("Respuesta correcta")
                console.log(indicecorrect)
            }
            else{
                console.log("Respuesta incorreta")
                indiceincorrect = indiceincorrect + 1
                console.log(indiceincorrect)
            }
        }
    })
})