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

    `<li class="option"><input type="radio" name="q${index + 1}" value="${pregunta.option1}">${pregunta.option1}</li>
    <li class="option"><input type="radio" name="q${index + 1}" value="${pregunta.option2}">${pregunta.option2}</li>
    <li class="option"><input type="radio" name="q${index + 1}" value="${pregunta.option3}">${pregunta.option3}</li>`

    preg1.append(preguntas, liPreguntas)
});


/*const q1Answer = document.querySelector('input[name="q1"]:checked');
const q2Answer = document.querySelector('input[name="q2"]:checked');

if (q1Answer == 'La picante') {
    alert("Sos un picante")
}
else{
    alert("Sos un peton")
}*/