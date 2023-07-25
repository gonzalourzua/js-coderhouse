


const tipoMiel = ['tiaca', 'ulmo', 'quillay', 'tevo', 'raps', 'maqui'];
const precioMiel = [4000, 5000, 4500, 6000, 5500, 7500];

let carro = JSON.parse(localStorage.getItem('carro')) || [];

function actualizaCarro() {
    localStorage.setItem('carro', JSON.stringify(carro));
}

function agregaCarro(eligeMiel, kilogramos) {
    let indice = tipoMiel.indexOf(eligeMiel);

    if (indice !== -1) {
        let precioTotal = precioMiel[indice] * kilogramos;
        const item = {
            tipoMiel: eligeMiel,
            kilogramos: kilogramos,
            precioTotal: precioTotal
        };

    carro.push(item);
    actualizaCarro();
    carroCompra();
    } else {
        alert('El tipo de miel no está en stock, seleccione un tipo de miel de la lista.');
    }
}

function carroCompra() {
    const carroItemsElement = document.getElementById('carro-items');
    const precioTotalElement = document.getElementById('precio-total');
    carroItemsElement.innerHTML = '';
    let total = 0;

carro.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.tipoMiel} - ${item.kilogramos}Kg - $${item.precioTotal}`;
    carroItemsElement.appendChild(listItem);
    total += item.precioTotal;
});

    precioTotalElement.textContent = `Total: $${total}`;
}

const agregaCarroButton = document.getElementById('agregaCarro');
agregaCarroButton.addEventListener('click', () => {
    const seleccionMiel = document.getElementById('miel').value;
    const seleccionKilogramos = parseInt(document.getElementById('kilogramos').value);

    if (seleccionKilogramos > 0) {
        agregaCarro(seleccionMiel, seleccionKilogramos);
    } else {
    alert('Ingrese una cantidad válida en Kg');
    }
});

carroCompra();
