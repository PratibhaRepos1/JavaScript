// operators in javascript
//Math operators
const now = 2037;
const agePratibha = now - 1984;
const ageDaksh = now - 2012;

console.log(agePratibha, ageDaksh);
console.log(agePratibha * 2, ageDaksh / 5);
console.log(2 ** 3);

//assignment operators
let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x *= 4;
console.log(x);
x ++;
x--;
x--;
console.log(x);

//Comparision operators shows the boolean value
console.log(agePratibha > ageDaksh);

console.log(agePratibha < ageDaksh);

console.log(ageDaksh >= 25);

//Equality operators == or ===
let myage = '18';
if(myage == 18)
{
    console.log('I am 18 yrs old loose');
}
else
{
    console.log('I am above or below 18 yrs old loose');
}

if(myage === 18)
{
    console.log('I am 18 yrs old strict');
}
else
{
    console.log('I am above or below 18 yrs old strict');
}

const favourite = 11;//prompt('Tell your number?');
console.log(favourite);
console.log(typeof favourite);

//basic logical operators and or and not
//logical operators
const hasDriversLicense = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive =hasDriversLicense && hasGoodVision;

if(shouldDrive) {
    console.log('Sarah is able to drive');
}else {
    console.log('someone else should drive...');
}

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);


if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
}else {
    console.log('someone else should drive...');
}