//rest parameter ... 
//number of arguments passing to functions convert into an array

let double = (...nums) => {
    //do something
   // console.log(nums)
   const res = nums.map((num) => num * 2);
   return res;
}

const result = double(1,2,3,4,7,8,222,121,56)
console.log(result)

//spread operators

const people = ['Sherin', 'Kola', 'Rici', 'John'];
const member = ['huan', 'kyun-chi', ...people];


console.log(member);

//spread syntax for objects

const employee = {
    id: 1290,
    firstname: 'Kyun-hi',
    lastName: 'Robison'
}

const manager = {...employee, city: 'Berlin', country: 'Germany'};

console.log(manager);