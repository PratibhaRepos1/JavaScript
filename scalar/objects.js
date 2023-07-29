// object literal
// initialzing object

var person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 25,
    ownsCar: false
}

console.log(person);

// access a value using dot notation

console.log(person.firstName);

// bracket notation 

console.log(person['ownsCar']);

var car = {
    brand: 'Telsa',
    model: 'model X',
    color: ['red', 'white', 'gray', 'black'],
    features: {
        speed: '149 mph',
        Range: '311 - 333 miles'
    }
};

console.log(car.color[3]);

console.log(car.features.speed);

car.model = 'model S';



//add new property to object

car.isAvailable = false;
console.log(car);

//to delete the key:value u can use delete 
//delete car.brand

console.log(car['brand']);
