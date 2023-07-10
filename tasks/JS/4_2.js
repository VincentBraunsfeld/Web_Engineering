function Person(name, cars) {
    this.name = name;
    this.cars = cars;
}

function Car(brand, id) {
    this.brand = brand;
    this.id = id;
}

function conflict(persons, car) {
    let counter = 0;
    persons.forEach(p => {
        if (p.cars.includes(car)) {
            counter++;
        }
    });
    return counter > 1 ? true : false;
}

let equal_car = new Car("VW", 1)
let p1_cars = [equal_car, new Car("BMW", 2), new Car("VW", 3)];
let p2_cars = [new Car("VW", 4), new Car("Fort", 5), equal_car];
let p1 = new Person("Peter", p1_cars);
let p2 = new Person("Lea", p2_cars);
let persons = [p1, p2];
console.log(conflict(persons, equal_car));