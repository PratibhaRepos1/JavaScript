var createCounter = function(n) {
    let countMe = n;
    return function() {
        return countMe++;
        
    };
};

const counter = createCounter(10)
 console.log(counter()) // 10
 console.log(counter()) // 11
 console.log(counter()) // 12

