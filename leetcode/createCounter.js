function createCounter(init) {
    let current = init;
    return {
        increment: function() {
            current++;
            return current;
        },
        decrement: function() {
            current--;
            return current;
        },
        reset: function() {
            current = init;
            return current;
        }
    };
}

// call function

const counter1 = createCounter(5);
console.log([counter1.increment(), counter1.reset(), counter1.decrement()]);
