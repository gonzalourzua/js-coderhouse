
//CALCULADORA DE PRECIO POR UNIDAD
//el usuario debe ingresar el número de unidades que comprará considerando un stock limitado. 
//El programa debe decir si no hay stock y entregar el precio final en el caso de que hayan unidades suficientes.


let unidad1 = parseInt(prompt("ingrese la cantidad de producto1 (disponibles: 10u)", 0))
let unidad2 = parseInt(prompt("ingrese la cantidad de producto2 (disponibles: 5u)", 0))

// do {
//     unidad1 = parseInt(prompt("ingresa un número nuevamente"))
//     unidad2 = parseInt(prompt("ingresa un número nuevamente"))

// } while ((unidad1 <= 0 || unidad2 <= 0 || isNaN(unidad1) || isNaN(unidad2)));

const valor1 = 5000
const valor2 = 2500

total1 = (unidad1 * valor1)
total2 = (unidad2 * valor2)

console.log(total1)
console.log(total2)

let precioFinal = (total1 + total2)

console.log("El precio final es: " + precioFinal)


if (unidad1 > 10 || unidad2 > 5 || isNaN(unidad1) || isNaN(unidad2)) {

    console.log("la cantidad no es correcta")
    alert("la cantidad no es correcta")

    unidad1 = parseInt(prompt("ingrese la cantidad de producto1", 0))
    unidad2 = parseInt(prompt("ingrese la cantidad de producto2", 0))

}else if(unidad1 < 10 || unidad2 < 5){
    console.log("unidades en el carro de compra: "+precioFinal)
    alert("el valor total de compra es: " +precioFinal)
}










