function identity( a ) {
    return a;
}

function identity_function( a ) {
    return function(){
        return a;
    }
}

function add(a , b){
    return a+b;
}

function mul(a , b){
    return a*b;
}

function addf( a ){
    return function( b ){
        return a + b;
    }
}

function applyf( bin_f ){
    return function(a){
        return function(b){
            return bin_f(a,b);
        }
    }
}

var x = applyf(mul);

console.log(x(4)(9));