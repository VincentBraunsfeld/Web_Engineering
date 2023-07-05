const fib_button = document.getElementById('fib_button');
const fib_input = document.getElementById('fib_input');
const fib_table = document.getElementById('fib_table');
const fib_span = document.getElementById('fib_span');
const clear_button = document.createElement('button')
clear_button.textContent = 'löschen';
let clear_button_created = false;

clear_button.addEventListener('click', () => {
    const rowCount = fib_table.rows.length;
    for (let i = rowCount - 1; i >= 3; i--) {
        fib_table.deleteRow(i);
    }
})

let fib_row = { 0: 0, 1: 1 };

fib_button.addEventListener('click', () => {
    if(!clear_button_created){
        fib_span.appendChild(clear_button);
        clear_button_created = true;
    }
    const number = parseInt(fib_input.value);
    const keys = Object.keys(fib_row);
    const lastKey = parseInt(keys[keys.length - 1]);
    fib(number);
    const entries = Object.entries(fib_row);

    for (let i = lastKey + 1; i <= number; i++) {
        const [key, value] = entries[i];
        addTableRow(key, value, number);
    }
});

function addTableRow(key, value, number) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.textContent = key;
    td2.textContent = value;

    if (key === number.toString()) {

        tr.style.backgroundColor = ('green');
    }

    tr.appendChild(td1);
    tr.appendChild(td2);
    fib_table.appendChild(tr);
}

function resetTable() {
    const rows = fib_table.querySelectorAll('tr');
    rows.forEach(row => {
        row.style.background = 'white';
    });
}

function fib(x) {
    if (fib_row.hasOwnProperty(x)) return;

    let key = parseInt(Object.keys(fib_row)[Object.keys(fib_row).length - 1]);
    let n1 = BigInt(Object.values(fib_row)[Object.values(fib_row).length - 1]); // n-1
    let n2 = BigInt(Object.values(fib_row)[Object.values(fib_row).length - 2]); // n-2

    key++;
    while (key <= x) {
        let temp = n1;
        n1 += n2;
        n2 = temp;
        fib_row[key++] = n1;
    }
    return n1;
}