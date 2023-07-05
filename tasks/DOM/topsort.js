function topSort(array) {
    let nodes = {};

    array.forEach(row => row.forEach(col => {     //get all nodes
        if (!nodes.hasOwnProperty(col)) nodes[col] = [];
    }));

    Object.keys(nodes).forEach(node => nodes[node] = predecessors(node, array)); // get the list with the predecessor for each node

    let result = [];

    while (Object.keys(nodes).length !== 0) {  // delete node with zero predecessor and push them in a list after delete it from each list
        Object.keys(nodes).forEach(node => {
            if (nodes[node].length === 0) {
                result.push(node);
                del(node, nodes);
                delete nodes[node];
            }
        })
    }
    return result;

}

function predecessors(node, array) {
    let predecessors = [];
    array.forEach(pair => {
        if (pair[1] === node && !predecessors.includes(pair[0])) predecessors.push(pair[0]);
    });
    return predecessors;
}

function del(node, nodes) {  // delete node in all lists

    Object.keys(nodes).forEach(k => {
        if (nodes[k].includes(node)) {
            nodes[k].splice(nodes[k].indexOf(node), 1);
        }
    });
}

let l=[];
let list_str = "";
const add_btn = document.getElementById("add_btn");
const create_btn = document.getElementById("create_btn");
const list = document.getElementById("list");
const input = document.getElementById("input");
const result = document.getElementById("result");
const delete_btn = document.getElementById("delete_btn");


add_btn.addEventListener('click', ()=>{

    result.textContent = "";
    let temp = input.value.split(',');
    let e1 = temp[0].substring(1,temp[0].length);
    let e2 = temp[1].substring(0,temp[1].length-1);
    l.push([e1,e2]);
    if( list_str.length === 0){
        list_str = `{(${e1},${e2})}`;
    }
    else{
        list_str = list_str.substring(0,list_str.length-1) + ',' + `(${e1},${e2})` + '}';
    }
    list.textContent = list_str;
    input.value = '';



});

create_btn.addEventListener('click', ()=>{
    result.textContent = "["+topSort(l)+"]";
});

delete_btn.addEventListener('click', ()=>{
    list_str = "";
    list.textContent = "{leer}";
    result.textContent = "";
    l = [];
})
/*
let x = [["unterhose", "hose"], ["socken", "schuhe"], ["hose", "mantel"], ["unterhemd", "pulli"], ["pulli", "mantel"], ["hose", "schuhe"]];

console.log(topSort(x));

 */