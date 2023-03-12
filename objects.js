//1. OOP in JS
const circle = {
    radius:1,
    location:{
        x:2,
        y:2
    },
    isVisible:true,
    draw:function()
    {
        console.log('Draw here')
    }
};

//circle.draw(); //method
//function inside a object is called method

//2. Factory function 
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('radius is ' + radius + 'Draw called');
        }
    };
}
const circle1 = createCircle(2);
//console.log(circle1);
const circle2 =createCircle(5);
//console.log(circle2);

//constructor function
function Circle(radius)
{
    this.radius = radius;
    this.draw = function(){
        console.log('drawing circle');
    }
}
const mycircle = new Circle(10);
//console.log(mycircle);

//dynamic nature of objects
const square = {
    width:10
}
square.color = 'yellow';
square.draw = function(){
    console.log('draw square');
}

//delete property
delete square.color;
delete square.draw;
console.log(square);

//clone the object
const person = {
    name:'ram',
    height:5.4,
    address:{
        street:'m.g. road',
        city: 'pune'
    }
};

const anotherPerson = Object.assign({gender:'male'}, person);
//console.log(anotherPerson);

const anotherPerson2 = {...anotherPerson};
console.log(anotherPerson2);