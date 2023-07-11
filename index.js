

//La función principal del programa es la compra de tipos de miel por Kg.

/*
El usuario debe ingresar el tipo de miel y los Kg que necesita y el programa debe
devolver la info ingresada y el costo total
 */

const preciosMiel = {
    tiaca: 4000,
    ulmo: 5000,
    quillay: 4500,
    tevo: 6000,
    raps: 5500,
    maqui: 7500
  };
  
  let tipoMiel = prompt("Seleccione el tipo de miel: tiaca, ulmo, quillay, tevo, raps, maqui");
  let cantidadKg = prompt("Ingrese la cantidad de miel en kilogramos:");
  
  let precioPorKg = preciosMiel[tipoMiel];
  let precioTotal = cantidadKg * precioPorKg;

  console.log("Tipo de miel: " + tipoMiel);
  console.log("Cantidad: " + cantidadKg + " kg");
  console.log("Precio total: $" + precioTotal);

  alert("Llevas: " + cantidadKg + " Kg de miel de " + tipoMiel + " por un total de: " + precioTotal)
  