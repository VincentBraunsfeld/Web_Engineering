const pages = document.querySelectorAll('.page');

const js = document.querySelector('#JS');
const dom = document.querySelector('#DOM');
const ecma = document.querySelector('#ECMAScript');
const functional = document.querySelector('#Functional');
const async = document.querySelector('#Async');


document.querySelectorAll('aside ul li').forEach(li => {
    li.addEventListener('click', () => {
        pages.forEach( page => page.style.display = "none");
            switch(li.id){
                case 'js_content':
                    js.style.display = 'block';
                    break;
                case 'dom_content':
                    dom.style.display = 'block';
                    break;
                case 'ecma_content':
                    ecma.style.display = 'block';
                    break;
                case 'functional_content':
                    functional.style.display = 'block';
                    break;
                case 'async_content':
                    async.style.display = 'block';
                    break;
            }
    });
});