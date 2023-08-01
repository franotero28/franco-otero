let numeros = [15, 2, 35, 4, 5, 16, 7, 8, 10, 1, 25, 3, 9, 6, 32]

function imprimirNumeros(){
let i = 1
while(i < numeros.length){
    if(numeros[i] < 10){
    console.log(numeros[i])
    }
    i++
}
}