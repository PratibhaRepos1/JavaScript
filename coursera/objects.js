// built in methods in objects: keys, values, entries
const car2 = {
    speed: 200,
    color: 'red'

}
console.log(Object.keys(car2));
console.log(Object.values(car2));

const car4 = {
    speed: 400,
    color: 'blue'
}

console.log(Object.entries(car4));

var clothingItems = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autum'
}

for(const key of Object.keys(clothingItems)) {
    console.log(key, ':', clothingItems[key])
}

function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
        dynamicKey = "speed"
    } else {
        dynamicKey = "color";
    }

    var drone = {
        speed: 15,
        color: 'black'
    }
    console.log(drone[dynamicKey])
}

testBracketsDynamicAccess();
