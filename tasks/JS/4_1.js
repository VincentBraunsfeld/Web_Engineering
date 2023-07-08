//4.1.1
const input_identity = document.getElementById("identity");
const p_identity = document.getElementById('p1');
const button_identity = document.getElementById('btn1');
const span_identity = document.createElement('span');
button_identity.addEventListener('click', () => {
    let result = identity(input_identity.value);
    span_identity.textContent = ` = ${result}`;
    p_identity.innerHTML += span_identity.outerHTML;
    input_identity.value = '';
});
input_identity.addEventListener('input', function( event ){
    p_identity.textContent = 'identity( '+this.value+' )';
});

function identity( input ){
        return input;
}

//4.1.2
const id_input = document.getElementById('id_function_input');
const id_button = document.getElementById('id_function_btn');
const id_span = document.getElementById('id_span');
const p_test = document.createElement('p');
p_test.classList.add('result');

id_button.addEventListener('click', () => {
    const x = identity_function(id_input.value);
    const button_execute = document.createElement('button');
    button_execute.textContent = 'ausführen';
    button_execute.classList.add('custom-button');

    button_execute.addEventListener('click', () => {
        p_test.innerHTML = `${x()}`;
    });

    p_test.innerHTML = `${x}`;
    p_test.appendChild(button_execute);
    id_span.appendChild(p_test);
});

function identity_function(param) {
    return function () {
        return param;
    }
}

//4.1.3
const add_input1 = document.getElementById('add_input1');
const add_input2 = document.getElementById('add_input2');
const add_button = document.getElementById('addBtn');
const add_p = document.getElementById('add_p');

const mul_input1 = document.getElementById('mul_input1');
const mul_input2 = document.getElementById('mul_input2');
const mul_button = document.getElementById('mulBtn');
const mul_p = document.getElementById('mul_p');

add_button.addEventListener('click', () => {

    let result = add(parseInt(add_input1.value), parseInt(add_input2.value));
    console.log(result);
    add_p.textContent = `${result}`;
})

mul_button.addEventListener('click', () => {
    let result = mul(parseInt(mul_input1.value), parseInt(mul_input2.value));
    mul_p.textContent = `${result}`;
})


function add(a , b){
    return a+b;
}

function mul(a , b){
    return a*b;
}

//4.1.4 anpassen
const addf_input = document.getElementById('addf_function_input');
const addf_button = document.getElementById('addf_function_btn');
const addf_span = document.getElementById('addf_span');
const addf_p = document.createElement('p');
addf_p.classList.add('result');
const addf_input2 = document.createElement('input');
addf_input2.setAttribute('type', 'number');
addf_input2.classList.add('custom-input')

addf_button.addEventListener('click', () => {
    const x = addf(parseInt(addf_input.value));
    const button_execute = document.createElement('button');
    button_execute.textContent = 'ausführen';
    button_execute.classList.add('custom-button')

    button_execute.addEventListener('click', () => {
        addf_p.innerHTML = `${x(parseInt(addf_input2.value))}`;
    });

    addf_p.innerHTML = `${x}`;
    addf_p.appendChild(addf_input2);
    addf_p.appendChild(button_execute);
    addf_span.appendChild(addf_p);
});
function addf( a ){
    return function( b ){
        return a + b;
    }
}

//4.1.5
const select_applyf = document.getElementById('select_applyf');
const input1_applyf = document.getElementById('input1_applyf');
const input2_applyf = document.getElementById('input2_applyf');
const button_applyf = document.getElementById('btn_applyf');
const span_applyf = document.getElementById('span_applyf');
const p_applyf = document.createElement('p');
p_applyf.classList.add('result');

button_applyf.addEventListener('click', () => {
    let bin_f = select_applyf.value === 'add' ? add : mul;
    let result = applyf(bin_f)(parseInt(input1_applyf.value))(parseInt(input2_applyf.value));
    console.log(result);
    p_applyf.textContent = `${result}`;
    span_applyf.appendChild(p_applyf);
});
function applyf( bin_f ){
    return function(a){
        return function(b){
            return bin_f(a,b);
        }
    }
}


