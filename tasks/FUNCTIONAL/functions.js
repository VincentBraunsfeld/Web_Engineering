function identity_function(a) {
    return function () {
        return a;
    }
}

const x1 = identity_function(5);
console.log(x1());

function addf(a) {
    return function (b) {
        return a + b;
    }
}

console.log(addf(4)(5));

function add(a,b){
    return a+b;
}

function applyf(bin_f){
    return function(a){
        return function(b){
            return bin_f(a, b);
        }
    }
}

function curry( bin_f, a){
    return function(b){
        return bin_f(a,b);
    }
}

//function inc()


console.log(applyf(add)(5)(7));
console.log(curry(add, 5)(7));

