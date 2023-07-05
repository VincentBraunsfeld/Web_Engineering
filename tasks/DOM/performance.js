const performance_input = document.getElementById("performance_input");
const performance_button = document.getElementById("performance_button");
const innerHTMLResult = document.getElementById("innerHTMLResult");
const innerTextResult = document.getElementById("innerTextResult");
const textContentResult = document.getElementById("textContentResult");
const outerHTMLResult = document.getElementById("outerHTMLResult");


performance_button.addEventListener('click', () => {
    const t0 = performance.now();
    innerHTMLResult.innerHTML = performance_input.value;
    const t1 = performance.now();
    innerHTMLResult.textContent = t1 - t0;

    const t2 = performance.now();
    innerTextResult.innerText = performance_input.value;
    const t3 = performance.now();
    innerTextResult.textContent = t3 - t2;

    const t4 = performance.now();
    textContentResult.textContent = performance_input.value;
    const t5 = performance.now();
    textContentResult.textContent = t5 - t4;

    const t6 = performance.now();
    outerHTMLResult.textContent = performance_input.value;
    const t7 = performance.now();
    console.log(t7 - t6);
    outerHTMLResult.textContent = t7 - t6;

});