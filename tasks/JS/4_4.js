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

let x = [["unterhose", "hose"], ["socken", "schuhe"], ["hose", "mantel"], ["unterhemd", "pulli"], ["pulli", "mantel"], ["hose", "schuhe"]];

console.log(topSort(x));