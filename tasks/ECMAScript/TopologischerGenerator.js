class Vorrang{
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

    *gen(){
        let result = this.topSort();
        for(const ele of result){
            yield ele;
        }
    }
}

const studentenLeben = new Vorrang( [
    [ "schlafen", "studieren" ],
    [ "essen", "studieren" ],
    [ "studieren", "prüfen" ]
] )

for(const next of studentenLeben.gen()){
    console.log(next);
}