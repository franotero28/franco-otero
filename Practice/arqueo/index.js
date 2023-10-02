const numero = document.getElementById("number")
const sumar = document.getElementById("btnSuma")

const Arqueo = document.getElementById("arqueo")

const caja = document.getElementById("caja")
const pagofacil = document.getElementById("1")
const kiosco = document.getElementById("2")
const mercadopago = document.getElementById("3")

const mostrarArqueo = document.getElementById("mostrarArqueo")
const verTotal = document.getElementById("verTotal")

let total = []

sumar.addEventListener("click", () =>{
    if (numero.value == ""){
        alert("Ingrese numero valido!")
    }
    else if (caja.value === "PAGO FACIL") {
        total.push([numero.value,caja.value])
        console.log(total)
    }
    else if (caja.value === "KIOSCO") {
        total.push([numero.value,caja.value])
        console.log(total)
    }
    else if (caja.value === "MERCADO PAGO") {
        total.push([numero.value,caja.value])
        console.log(total)
    }
})


mostrarArqueo.addEventListener("click", ()=>{
    Arqueo.innerHTML = ` `
    total.forEach((numero) =>{
        let verArqueo = document.createElement("li")
        verArqueo.innerHTML = `${numero}`
        Arqueo.append(verArqueo)
    })
})

verTotal.addEventListener("click", () => {
    let suma = 0; // Inicializa la variable suma
    total.forEach((entrada) => {
        // Parsea los valores de entrada como números y los suma a la suma
        suma += parseFloat(entrada[0]);
    });
    console.log(suma); // Registra el total en la consola
});


/*verTotal.addEventListener("click", ()=>{ 
let suma = numero.value + numero.value
console.log(suma)
})*/
