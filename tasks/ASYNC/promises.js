const promise_concat_button = document.getElementById('promise-concat-button');
const promise_concat_del_button = document.getElementById('promise-concat-del-button');
const promise_concat_p = document.getElementById('promise-concat-p');

promise_concat_del_button.addEventListener('click', () => {
    promise_concat_p.innerText = '';
})

promise_concat_button.addEventListener('click', () => {
    Promise.all([
        fetch('../tasks/ASYNC/a.txt').then(response => response.text()),
        fetch('../tasks/ASYNC/b.txt').then(response => response.text())
    ]).then(([a,b]) => {
        const linesA = a.split('\n');
        const linesB = b.split('\n');
        linesA.forEach((lineA, i) => {
            promise_concat_p.innerText += lineA + '\n';
            promise_concat_p.innerText += linesB[i] + '\n';
        });
    });
});
