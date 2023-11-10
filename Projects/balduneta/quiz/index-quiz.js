import {preguntas} from "./preguntas-quiz.js"

const divCuestionario = document.getElementById("quiz-valorant")


preguntas.forEach((elemento) =>{
const preguntas = document.createElement("div")
preguntas.className = "preguntas-quiz"

preguntas.innerHTML = `<p>${elemento.pregunta}</p>
<input type="checkbox"><p>${elemento.opciones[0]}</p></input>
<input type="checkbox"><p>${elemento.opciones[1]}</p></input>
<input type="checkbox"><p>${elemento.opciones[2]}</p></input>
`
divCuestionario.append(preguntas)
})