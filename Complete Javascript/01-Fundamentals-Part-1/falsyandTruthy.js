//5 falsy values: 0, '', null, undefined, null and NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean('test'));
console.log(Boolean({}));

const money = 0;
if(money)
{
    console.log("don't spend it all");
}
else
{
    console.log("You should get a job!");
}
let height;
if(height){
    console.log('YAY! height is defined');
}
else
{
    console.log('height is undefined');
}