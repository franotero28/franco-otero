const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")

const btnSuma = document.getElementById("botonSuma")

const divResultado = document.getElementById("mostrarResultado")

function suma(a,b){
 return parseInt(a) + parseInt(b)
}

btnSuma.addEventListener("click",()=>{
    let resultados = suma(num1.value,num2.value)
    divResultado.innerHTML = `
        <p>El Resultado es = ${resultados}</p>
    `
})



