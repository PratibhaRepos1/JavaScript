const array = [1, 3, 10, 11, 14];
const goal = 13;
console.log(twosum(array, goal));

function twosum (array, goal)  {
    let numberMap = new Map();

    for (let index = 0; index < array.length; index++) {
      el = array[index];
  
      if (numberMap.has(goal - el)) 
        return [index, numberMap.get(goal - el)];
      else numberMap.set(el, index);
    }
  
    return [];
}