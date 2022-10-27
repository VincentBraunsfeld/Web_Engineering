let fib_row = {0 : 0, 1: 1};

function fib( x ){
    if(fib_row.hasOwnProperty(x)) return fib_row[x];
    let key = Object.keys(fib_row)[Object.keys(fib_row).length-1];
    let n1 = Object.values(fib_row)[Object.values(fib_row).length-1]; // n-1
    let n2 = Object.values(fib_row)[Object.values(fib_row).length-2]; // n-2
    BigInt(n1);
    BigInt(n2);
    BigInt(key);
    key++;
    while( key <= x){
        let temp = n1;
        n1 += n2;
        n2 = temp;
        fib_row[key++] = n1;
        console.log(fib_row);
    }
    return n1;
}
let i=0;
while( fib(i) != Infinity) {
    fib(i++);
}
console.log(Object.keys(fib_row)[Object.keys(fib_row).length-1]);


