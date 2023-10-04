const boton1 = document.getElementById("1")
const btnName = document.getElementById("btnName")
const input = document.getElementById("name")
const nombreContainer = document.getElementById("nombreContainer")


btnName.addEventListener("click", ()=>{
    let nombre = input.value
    input.value = ""
    nombreContainer.innerHTML = `${nombre}`
    input.style.display = "hidden"
})


