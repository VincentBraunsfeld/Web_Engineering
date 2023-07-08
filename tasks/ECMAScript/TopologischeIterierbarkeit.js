//const iterator_input = document.getElementById("iterator_input");
//const iterator_button = document.getElementById("iterator_button");



class Vorrang {
    constructor(array) {
        this.array = array;
    }

    topSort() {
        const results = [];

        this.array.forEach((dependency) => {
            let firstItem = dependency[0];
            let secondItem = dependency[1];

            if (results.includes(firstItem)) {
                if (results.includes(secondItem)) {
                    results.splice(results.indexOf(secondItem), 1); // remove first occurence of secondItem
                }
                results.splice(results.indexOf(firstItem) + 1, 0, secondItem); // add the second item in the right position
            } else if (results.includes(secondItem)) {
                if (results.includes(firstItem)) {
                    results.splice(results.indexOf(firstItem), 1);
                }
                results.splice(results.indexOf(secondItem), 0, firstItem);
            } else {
                results.push(firstItem, secondItem);
            }
        });

        return results;
    }

    [Symbol.iterator]() {
        const result = this.topSort();
        let i = 0;
        return {
            next() {
                return {
                    value: result[i++],
                    done: i > result.length
                }
            }
        }
    }
}

const studentenLeben = new Vorrang([
    ["schlafen", "studieren"],
    ["essen", "studieren"],
    ["studieren", "prüfen"]
])
const resul = ["schlafen", "essen", "studieren", "prüfen"];
let counter = 0
for (const next of studentenLeben) {
    console.log(next);
}



