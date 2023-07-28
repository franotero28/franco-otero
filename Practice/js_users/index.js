const listUsuarios = []

function ingresarUsuario(){
    const Users = prompt("Ingresar nombre usuario")
    const Claves = prompt("Ingresar contrasenha")
    if (Users == null || Users == ""){
        alert("Logueado incorrectemente, intente nuevamente")
      }
      else{
    listUsuarios.push({Users,Claves})
    console.log(listUsuarios)
}
}


/*Function de chat gpt*/
function mostrarListaUsuarios() {
    const listaUsuariosElement = document.getElementById("listaUsuarios");
    
    // Limpiamos el contenido anterior para no duplicar usuarios
    listaUsuariosElement.innerHTML = "";
    
    let indice = 0;
    while (indice < listUsuarios.length) {
        const usuario = listUsuarios[indice];
        const liElement = document.createElement("li");
        liElement.textContent = `Usuario: ${usuario.Users}, Contraseña: ${usuario.Claves}`;
        listaUsuariosElement.appendChild(liElement);
        liElement.classList='list-group-item d-flex justify-content-around'
        indice++;
    }
}
/*MI FUNCTION Q NO ANDA NADA
function mostrarUsuarios(){
    indice = 0
    const elementoslista= document.getElementById("mostrare")
    elementoslista.innerHTML= ""
    while(indice < listUsuarios.length){
    const liUsuario = document.createElement("li")
    indice++
    }
*/