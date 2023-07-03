function hund(name) {
    this.name = "bello";
    this.toString = function () {
        return name
    };
}

var katze = {
    name: 'mize',
    toString: function() {
    return this.name;
}
}
katze.name = 'mimi';
katze.add = function (a, b){ return a+b};
var bello = new hund("beller");
console.log(bello.toString());
console.log(katze.toString());
console.log(katze.add(4,5));