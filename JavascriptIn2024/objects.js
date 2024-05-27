var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running.")
};
car.lightsOn = function () {
    console.log('The lights are on.');
}
console.log(car);
car.turnTheKey();
car.lightsOn();

var item = [];
console.log(typeof(item))

var clothes = [];
  clothes.push('gray t-shirt');
  clothes.push('green scarf');
  clothes.pop();
  clothes.push('slippers');
  clothes.pop();
  clothes.push('boots');
  clothes.push('old jeans');

  console.log(clothes.length);

  var dog = {
    color: "brown",
    height: 30,
    length: 60
};
dog["type"] = "corgi";

console.log(dog);
