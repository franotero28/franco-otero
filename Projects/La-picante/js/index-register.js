const user = document.getElementById("user")
const password = document.getElementById("password")
AOS.init()

function newLogin(){
    const usuario = (user.value)
    const contraseña = (password.value)
    console.log(usuario)
    console.log(contraseña)
}

