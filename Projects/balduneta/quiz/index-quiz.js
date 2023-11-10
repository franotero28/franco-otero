import {preguntas} from "./preguntas-quiz.js"

const divCuestionario = document.getElementById("quiz-valorant")

let index = 0
preguntas.forEach((elemento) =>{
const preguntas = document.createElement("form")
preguntas.className = "preguntas-quiz"

preguntas.innerHTML = `<p>${elemento.pregunta}</p>
<input type="radio" name="${index + 1}"><p>${elemento.opciones[0]}</p></input>
<input type="radio" name="${index + 1}"><p>${elemento.opciones[1]}</p></input>
<input type="radio" name="${index + 1}"><p>${elemento.opciones[2]}</p></input>
`
index++
divCuestionario.append(preguntas)
})

const botonEnviar = document.getElementById("enviarRespuestas")

botonEnviar.addEventListener("click", ()=>{
const radios = document.getElementsByName("1") 
for(let i = 0; i < radios.length; i++){
    if(radios[i].checked){
        console.log("selecciono:" + radios[i].value)
    }
}
})