const btnProyectos = document.getElementById("btnProyectos")
const ulProyectos = document.getElementById("ulProyectos")
const h1Proyecto = document.getElementById("h1Proyecto")

btnProyectos.addEventListener("click", ()=>{

    h1Proyecto.innerHTML = ""
    h1Proyecto.innerHTML = "↓ 📁 Proyectos"

    const liProyectos = document.createElement("li")
    ulProyectos.innerHTML = ""
    liProyectos.className = "ul-proyectos"
    liProyectos.innerHTML = `
    <button class="buton-carpet mb-3 id="btnCarpeta"><li class="carpeta mr-3">📁La Picante</li></button>
    <button class="buton-carpet mb-3"><li class="carpeta">📁La Balduneta</li></button>
    <button class="buton-carpet mb-3"><li class="carpeta">📁Metalurgica</li></button>
    `
    ulProyectos.append(liProyectos)
})

const btnCarpeta = document.getElementById("btnCarpeta")

btnCarpeta.addEventListener("click",()=>{
    
})