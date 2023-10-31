const comentario = document.getElementById("Coments")
const cajaComentarios = document.getElementById("caja-comentarios")
const submit = document.getElementById("submit")

submit.addEventListener("click", () =>{

const parrafo = document.createElement("p")
parrafo.innerHTML = `${comentario.value}`

cajaComentarios.append(parrafo)

comentario.value = ""
})

