// Selección de elementos
var form = document.querySelector('.add-items');
var itemsList = document.querySelector('.plates-list');
var items = JSON.parse(localStorage.getItem('items')) || [];

// Agregar Item
function addItem(e) {
    e.preventDefault();

    var text = this.querySelector('[name=item]').value;

    var item = {
        text: text,
        done: false
    };

    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
    this.reset();
}

// Mostrar Lista
function populateList(plates, platesList) {
    platesList.innerHTML = plates.map(function(plate, i) {
        return `
            <li class="plate-item">
                <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''}>
                <label for="item${i}">${plate.text}</label>
                <button class="delete-btn" data-delete="${i}">❌</button>
            </li>
        `;
    }).join('');
}

// Marcar como completado
function toggleDone(e) {
    if (e.target.matches('input[type="checkbox"]')) {
        var index = e.target.dataset.index;
        items[index].done = !items[index].done;
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemsList);
    }
}

// Eliminar elemento
function deleteItem(e) {
    if (e.target.matches('.delete-btn')) {
        var index = e.target.dataset.delete;
        items.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemsList);
    }
}

// Listeners
form.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
itemsList.addEventListener('click', deleteItem);

// Cargar al inicio
populateList(items, itemsList);
