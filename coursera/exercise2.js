const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);


let food = "Chocolate";
console.log(`My favourite food is ${food}`);

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);

console.log(set);

let obj = {
    key: 1,
    value: 4
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);
function scopeTest() {
    var y = 44;

    console.log(x);
}

var x = 33;
scopeTest();

class Cake {
    constructor(lyr) {
        this.layers = lyr;
    }

    getLayers() {
        return this.layers;
    }
}

class WeddingCake extends Cake {
    constructor() {
        super(2);
    }

    getLayers() {
        return super.getLayers() * 5;
    }
}

var result = new WeddingCake();
console.log(result.getLayers());

class Animal {

}

class Dog extends Animal {
    constructor() {
        super();
        this.noise = "bark";
    }

    makeNoise() {
      return this.noise;
    }
}

class Wolf extends Dog {
    constructor() {
        super();
        this.noise = "growl";
    }
}

var result = new Wolf();
console.log(result.makeNoise());

const  [a, b]  =  [1,2,3,4];
console.log(b)

function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null);

var result = 0;

for(var i = 0; i < 5; i++) {
    result += 2;
   
}

//console.log(result);

function addTwo(a,b) {
    return a + b
}
addTwo(5,"10")