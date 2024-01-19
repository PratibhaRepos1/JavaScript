var createCounter = function(init) {
    let n = init;
    return {
        increment: () => n++,
        decrement:() => n--,
        reset: () => n = init

    };
}
const counter = createCounter(2)
  console.log(counter.increment()); // 6

 // console.log(counter.decrement()); // 4

 // console.log(counter.reset()); // 5


