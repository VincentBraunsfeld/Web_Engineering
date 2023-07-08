const fib_button = document.getElementById('fib_button');
const fib_input = document.getElementById('fib_input');
const fib_table = document.getElementById('fib_table');
const fib_span = document.getElementById('fib_span');
const clear_button = document.createElement('button');
const errorMessage = document.getElementById('error_message');
clear_button.textContent = 'löschen';
clear_button.classList.add('del-button');
fib_span.appendChild(clear_button);
let table_created = true;

let fib_row = { 0: 1, 1: 1 };


clear_button.addEventListener('click', () => {
    const rowCount = fib_table.rows.length;
    fib_row = { 0: 1, 1:1};
    errorMessage.textContent = '';
    table_created = true;
    for (let i = rowCount - 1; i >= 1; i--) {
        fib_table.deleteRow(i);
    }
})



fib_button.addEventListener('click', () => {

    errorMessage.textContent = '';
    const number = parseInt(fib_input.value);

    if (number < 0) {
        const errorMessage = document.getElementById('error_message');
        errorMessage.textContent = 'Die eingegebene Zahl muss größer oder gleich Null sein.';
        return;
    }

    if(table_created){
        table_created = false;
        if(number === 0){
            addTableRow(0, 1, 0);
        }
        else {
            addTableRow(0,1,0);
            addTableRow(1, 1, 1);
        }
    }

    resetColor();

    const keys = Object.keys(fib_row);
    const lastKey = parseInt(keys[keys.length - 1]);

    if(fib(number)) {
        const entries = Object.entries(fib_row);
        console.log(lastKey, number);
        for (let i = lastKey + 1; i <= number; i++) {
            const [key, value] = entries[i];
            addTableRow(key, value, i);
        }
    }
    setColor(number)
});

function addTableRow(key, value, rowValue) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    tr.setAttribute('data-index', rowValue);
    td1.textContent = key;
    td2.textContent = value;

    tr.appendChild(td1);
    tr.appendChild(td2);
    fib_table.appendChild(tr);
}

function setColor(number){
    const rows = fib_table.querySelectorAll('tr');
    rows.forEach(row => {
        const dataIndex = row.getAttribute('data-index');
        if (dataIndex === number.toString()) {
            row.style.backgroundColor = '#129385';
        }
    });
}

function resetColor() {
    const rows = fib_table.querySelectorAll('tr');
    rows.forEach(row => {
        row.style.background = 'white';
    });
}

function fib(x) {
    if (fib_row.hasOwnProperty(x)) return false;

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
    return true;
}