var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for(var item of dairy) {
        console.log(item);
    }
}

logDairy();

//step 2
const animal = {

    canJump: true
    
    };
    
    const bird = Object.create(animal);
    
    bird.canFly = true;
    
    bird.hasFeathers = true;

    function birdCan() {
        for(const key of Object.keys(bird)) {
            console.log(key, ':', bird[key]);
        }
    }
    birdCan();

    //step3
    console.log('step3')
    function animalCan() {
        for (let prop in bird) {
          console.log(`${prop}: ${bird[prop]}`);
        }
      }
    animalCan();