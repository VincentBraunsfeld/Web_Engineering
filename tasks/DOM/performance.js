const input = document.getElementById("input");
const btn = document.getElementById("btn");
const innerHTML = document.getElementById("innerHTML");
const innerText = document.getElementById("innerText");
const textContent = document.getElementById("textContent");
const outerHTML = document.getElementById("outerHTML");


btn.addEventListener('click', ()=>{
    const t0 = performance.now();
      innerHTML.innerHTML = input.value;
    const t1 = performance.now();
    innerHTML.textContent = t1-t0;

    const t2 = performance.now();
    innerText.innerText = input.value;
    const t3 = performance.now();
    innerText.textContent = t3-t2;

    const t4 = performance.now();
    textContent.textContent = input.value;
    const t5 = performance.now();
    textContent.textContent = t5-t4;

    const t6 = performance.now();
    outerHTML.outerHTML = input.value;
    const t7 = performance.now();
    outerHTML.innerText = t7-t6;

});

