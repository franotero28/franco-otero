import {preguntas} from "./preguntas-quiz.js"

const divCuestionario = document.getElementById("quiz-valorant")


preguntas.forEach((elemento) =>{
const preguntas = document.createElement("div")
preguntas.className = "preguntas-quiz"
preguntas.innerHTML = `<p>${elemento.pregunta}</p>
<p>${elemento.opciones[0]}</p>
<p>${elemento.opciones[1]}</p>
<p>${elemento.opciones[2]}</p>
`
divCuestionario.append(preguntas)
})