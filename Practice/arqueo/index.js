const numero = document.getElementById("number")
const sumar = document.getElementById("btnSuma")
const totalNeto = document.getElementById("totalNeto")
const discTotales = document.getElementById("discriminarTotales")

const Arqueo = document.getElementById("arqueo")

const caja = document.getElementById("caja")
const totalesPorCaja = {
    "PAGO FACIL": 0,
    "KIOSCO": 0,
    "MERCADO PAGO": 0
};

const mostrarArqueo = document.getElementById("mostrarArqueo")
const verTotal = document.getElementById("verTotal")

let total = []

sumar.addEventListener("click", () =>{
    if (numero.value == ""){
        alert("Ingresa numero valido cara de pingo!")
    }
    else if (caja.value === "PAGO FACIL" || caja.value === "KIOSCO" || caja.value === "MERCADO PAGO") {
        const monto = parseFloat(numero.value);
        total.push([monto, caja.value])
        console.log(total)
        totalesPorCaja[caja.value] += monto;
        console.log(totalesPorCaja)
    }

    Arqueo.innerHTML = ` `
    total.forEach((numero) =>{
        let verArqueo = document.createElement("li")
        verArqueo.innerHTML = `$${numero}`
        Arqueo.append(verArqueo)
    })
    
    let suma = 0;
    total.forEach((entrada) => {
        suma += parseFloat(entrada[0]);
        console.log(suma);
        const totalneto = document.createElement("h6")
        totalNeto.innerHTML = ` `
        totalneto.innerHTML = `TOTAL:$${suma}`
        totalNeto.append(totalneto)
    })
    for (let caja in totalesPorCaja) {
        const totalesEnCaja = document.createElement("h6")
        totalesEnCaja.innerHTML= `TOTAL EN ${caja}: $${totalesPorCaja[caja]}`;
        totalNeto.append(totalesEnCaja)
    }
    numero.value = ""
});

const deshacer = document.getElementById("btnDeshacer");

deshacer.addEventListener("click", () => {
  if (total.length > 0) {
    // Elimina el último elemento del arreglo total
    const ultimoElemento = total.pop();
    // Resta el valor eliminado de la categoría correspondiente en totalesPorCaja
    totalesPorCaja[ultimoElemento[1]] -= ultimoElemento[0];
    
    // Actualiza la vista de Arqueo y el total neto
    actualizarVista();
  }
});

function actualizarVista() {
  // Limpia los contenidos anteriores en Arqueo y totalNeto
  Arqueo.innerHTML = "";
  totalNeto.innerHTML = "";

  // Muestra los elementos actualizados en Arqueo
  total.forEach((entrada) => {
    let verArqueo = document.createElement("li");
    verArqueo.innerHTML = `$${entrada[0]}`;
    Arqueo.append(verArqueo);
  });

  // Calcula el nuevo total y muestra en totalNeto
  let suma = 0;
  total.forEach((entrada) => {
    suma += parseFloat(entrada[0]);
  });
  
  const totalneto = document.createElement("h6");
  totalneto.innerHTML = `TOTAL: $${suma}`;
  totalNeto.append(totalneto);

  // Muestra los totales en cada categoría en totalNeto
  for (let caja in totalesPorCaja) {
    const totalesEnCaja = document.createElement("h6");
    totalesEnCaja.innerHTML = `TOTAL EN ${caja}: $${totalesPorCaja[caja]}`;
    totalNeto.append(totalesEnCaja);
  }
}


