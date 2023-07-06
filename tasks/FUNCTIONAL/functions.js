const identity_function = x => () => x;

const addf = x => y => x + y;

const add = (x, y) => x + y;

const mul = (x, y) => x * y;

const applyf = bin_f => x => y => bin_f(x, y);

const curry = (bin_f, x) => y => bin_f(x, y);

const inc1 = x => addf(x)(1);

const inc2 = x => applyf(add)(x)(1);

const inc3 = x => curry(add, x)(1);

//methodize
const methodize = bin_f => function (y) {
    return bin_f(this, y)
};

// Beispielanwendung
//const add = (x, y) => x + y;
//Number.prototype.add = methodize(add);

//console.log((3).add(4));  // Output: 7

// demethodize
const demethodize = method => function (x, y) {
    return method.call(x, y);
};

// Beispielanwendung
//const add = (x, y) => x + y;
Number.prototype.add = function (y) {
    return this.valueOf() + y;
};

//console.log(demethodize(Number.prototype.add)(5, 6));  // Output: 11

const twice = bin_f => x => bin_f(x, x);
const double = twice(add);
const square = twice(mul);
// console.log(twice(add)(11));
// console.log(double(11));
// console.log(square(11));

const compseu = (un_f1, un_f2) => x => un_f2(un_f1(x));
console.log(compseu(double, square)(3));

const composeb = (bin_f1, bin_f2) => (x, y, z) => bin_f2(bin_f1(x, y), z);
console.log(composeb(add, mul)(2, 3, 5));

const once = f => {
    let called = false;

    return (...params) => {
        if (called) {
            throw new Error('Die Funktion darf nur einmal aufgerufen werden.');
        }

        called = true;
        return f(...params);
    };
};

/*const add_once = once(add);
console.log(add_once(3, 4));*/

function counterf(x){
    return {
        x,
        dec(){
            return --x;
        },
        inc(){
            return ++x;
        }
    }
}

// const counter = counterf(10);
// console.log(counter.dec());
// console.log(counter.inc());

function revocable(f) {
    return {
        isRevoked: false,
        invoke(...params) {
            if (isRevoked) {
                throw new Error('Die Funktion wurde widerrufen.');
            }
            return f(...params);
        },
        revoke() {
            this.isRevoked = true;
        }
    };
}

// Beispielanwendung
/*const temp = revocable(add);
console.log(temp.invoke(4, 5));
temp.revoke();
console.log(temp.invoke(4, 8)); */

function vector(){
    const data = []

    return{
        append(value){
            data.push(value);
        },
        store(index, value){
            data[index] = value;
        },
        get(index){
            return data[index];
        }
    }
}

// my_vector = vector();
// my_vector.append(7);
// my_vector.store(1, 8);
// console.log(my_vector.get(0));
// console.log(my_vector.get(1));







