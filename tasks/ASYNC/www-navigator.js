const nav_ul = document.getElementById('nav-ul');
const aside_ul = document.getElementById('aside-ul');
const main = document.querySelector('main p');
const article_ul = document.getElementById('article-ul')
let content = {};



async function fetchContent() {
    const response = await fetch('www-navigator.json');
    content = await response.json();
    let nav_item_id = 1;
    for (const key in content) {
        await createNavItem(content[key], nav_item_id++, key);
    }

}

async function createNavItem(obj, id, name) {
    console.log(name);
    //create nav item
    const nav_item = document.createElement('li');
    nav_item.id = 'nav' + id;
    nav_item.textContent = name;
    let item_id = 1;

    nav_item.addEventListener('click', () => {
        aside_ul.innerHTML = '';

        // Entferne 'active' von allen nav_items
        const nav_items = nav_ul.querySelectorAll('li');
        nav_items.forEach(item => item.classList.remove('active'));

        nav_item.classList.add('active');

        for (const key in obj) {
            const id = ''+name+ item_id++;
            createAsideItem(obj[key], id, key);
        }

    })
    nav_ul.appendChild(nav_item);
    nav_ul.querySelectorAll('li')[0].click();
}

async function createAsideItem(obj, id, name) {

    //create aside item
    const aside_item = document.createElement('li');
    aside_item.id =  id;
    aside_item.textContent = name;

    aside_item.addEventListener('click', () => {
        main.textContent = obj['content'];
        article_ul.innerHTML = '';

        // Entferne 'active' von allen aside_items
        const aside_items = aside_ul.querySelectorAll('li');
        aside_items.forEach(item => item.classList.remove('active'));

        aside_item.classList.add('active');

        obj['references'].forEach((ref, index) => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = ref;
                a.target = '_blank';
                a.textContent = 'reference_' + index;
                li.appendChild(a);
                article_ul.appendChild(li);

            }
        )

    })
    aside_ul.appendChild(aside_item);
    aside_ul.querySelectorAll('li')[0].click();
}

