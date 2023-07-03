const input_identity = document.getElementById("identity");
input_identity.addEventListener("input", function( event ){
    document.getElementById('a').textContent = 'f('+this.value+')';
});



function a( ) {
    const input = document.getElementById("identity").value;
    function identity( input ){
        return input;
    }
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


