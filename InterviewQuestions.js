var myarr = ['a', 'b', 'c','d'];
//Q1. add an element to array at end and at beginner

// myarr.push('end');
// myarr.unshift('start');
// console.log(myarr);

//using ES6 spread operator
myarr = ['start', ...myarr, 'end'];
 //console.log(myarr);

 //q2. How do you create a private variable in java script
 function myfunc()
 {
     var privatevar = 'private variable';
     return function() {
         return privatevar;
     }
 }

 var getprivatevarValue = myfunc();
 //console.log(getprivatevarValue);

 //q3. what is output of below function
 var num = 4;
 function outer(){
     var num = 2;
    function inner(){
         num++;
         var num = 3;
        // console.log(num)
     }
     inner();
 }
outer();

//q4. what is output
//console.log(typeof typeof 1); // answer is string buz if one time
//typeof 1 is number after that it treats as string so answer is
//typeof typeof 1 is string 

//best explaination is typeof 'number' is a string 

//q.5 what is the output
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function()
    {
        return this._name;
    }
};
var stoleSerectIdentity = hero.getSecretIdentity.bind(hero);
console.log(stoleSerectIdentity());
console.log(hero.getSecretIdentity());


 