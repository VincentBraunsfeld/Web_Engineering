const identity_function = x => () => x;

//Beispiel
// const id = identity_function(5);
// console.log(id);  result = 5

const addf = x => y => x + y;

//Beispiel
//console.log(addf(4)(5));  result = 9

const add = (x, y) => x + y;

const mul = (x, y) => x * y;

const applyf = bin_f => x => y => bin_f(x, y);

//Beispiel
//console.log(applyf(add)(5)(6)); result = 11
//console.log(applyf(mul)(5)(6)); result = 30


const curry = (bin_f, x) => y => bin_f(x, y);

//Beispiel
//console.log(curry(add, 4)(5)); result = 9;
//console.log(curry(mul, 4)(5)); result = 20;

const inc1 = x => addf(x)(1);

const inc2 = x => applyf(add)(x)(1);

const inc3 = x => curry(add, x)(1);

// Beispiel
// console.log(inc1(2)); result = 3
// console.log(inc2(2)); result = 3
// console.log(inc3(2)); result = 3


const methodize = bin_f => function (y) {
    return bin_f(this, y)
};

// Beispiel
//Number.prototype.add = methodize(add);
//console.log((3).add(4));  //result = 7


const demethodize = method => function (x, y) {
    return method.call(x, y);
};

// Beispiel
// Number.prototype.add = function (y) {
//     return this.valueOf() + y;
// };
//console.log(demethodize(Number.prototype.add)(5, 6));  result 11

const twice = bin_f => x => bin_f(x, x);

//Beispiel
const double = twice(add);
const square = twice(mul);
// console.log(twice(add)(11)); result = 22
// console.log(double(11)); result = 22
// console.log(square(11)); result = 121

const compseu = (un_f1, un_f2) => x => un_f2(un_f1(x));

//Beispiel
//console.log(compseu(double, square)(3)); result = 36

const composeb = (bin_f1, bin_f2) => (x, y, z) => bin_f2(bin_f1(x, y), z);

//Beispiel
//console.log(composeb(add, mul)(2, 3, 5)); result = 25

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

// Beispiel
// const add_once = once(add);
// console.log(add_once(3, 4)); result = 7
// console.log(add_once(3, 4)); // Die Funktion darf nur einmal aufgerufen werden

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

//Beispiel
// const counter = counterf(10);
// console.log(counter.dec()); result = 9
// console.log(counter.inc()); result = 10

function revocable(f) {
    return {
        isRevoked: false,
        invoke(...params) {
            if (this.isRevoked) {
                throw new Error('Die Funktion wurde widerrufen.');
            }
            return f(...params);
        },
        revoke() {
            this.isRevoked = true;
        }
    };
}

// Beispiel
// const temp = revocable(add);
// console.log(temp.invoke(4, 5));  result = 9
// temp.revoke();
// console.log(temp.invoke(4, 8));  Fehler

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

//Beispiel
// my_vector = vector();
// my_vector.append(7);
// my_vector.store(1, 8);
// console.log(my_vector.get(0)); result = 7
// console.log(my_vector.get(1)); result = 8







