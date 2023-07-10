const async_concat_button = document.getElementById('async-concat-button');
const async_concat_del_button = document.getElementById('async-concat-del-button');
const async_concat_p = document.getElementById('async-concat-p');


async_concat_del_button.addEventListener('click', () => {
    async_concat_p.innerText = '';
});

async_concat_button.addEventListener('click', async ()=>{
    try {
        const responseA = await fetch('../tasks/ASYNC/a.txt');
        const responseB = await fetch('../tasks/ASYNC/b.txt');
        const a = await responseA.text();
        const b = await responseB.text();
        const linesA = a.split('\n');
        const linesB = b.split('\n');

        linesA.forEach((lineA, i) => {
            async_concat_p.innerText += lineA + '\n';
            async_concat_p.innerText += linesB[i] + '\n';
        });
    }
    catch (error){
        throw new Error(error);
    }
})

