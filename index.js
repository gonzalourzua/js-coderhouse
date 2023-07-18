

//La función principal del programa es la compra de tipos de miel por Kg.

/*
El usuario debe ingresar el tipo de miel y los Kg que necesita y el programa debe
devolver la info ingresada y el costo total
 */


const tipoMiel   = ['tiaca', 'ulmo', 'quillay', 'tevo', 'raps', 'maqui'];
const precioMiel = [4000, 5000, 4500, 6000, 5500, 7500]; 

console.log(tipoMiel);
console.log(precioMiel);

let eligeMiel  = prompt('Seleccione el tipo de miel: tiaca, ulmo, quillay, tevo, raps, maqui');
let kilogramos = parseInt(prompt('Selecciona la cantidad en Kg'));

let indice = tipoMiel.indexOf(eligeMiel);

if (indice !== -1) {
  let precioTotal = precioMiel[indice] * kilogramos;

  console.log('El precio total de ' + kilogramos + 'Kg de '+ eligeMiel +' es: ' + precioTotal);
  alert('El precio total de ' + kilogramos + 'Kg de '+ eligeMiel +' es: ' + precioTotal);
} else {
  console.log('El tipo de miel no está en stock, seleccione un tipo de miel de la lista.');
  alert('El tipo de miel no está en stock, seleccione un tipo de miel de la lista.');
}