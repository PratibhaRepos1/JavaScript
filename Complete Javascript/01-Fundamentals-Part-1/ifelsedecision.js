const age = 16;


if( age >= 18) {
    console.log('Sarah can start driving license...!!!');
}
else
{
    const yearsLeft = 18 - age;
    console.log(`Sarah please wait until next ${yearsLeft} years...!!!`);
}

const birthYear = 1991;
let century;
if(birthYear <= 2000)
{
    century = '20th';
}
else
{
    century = '21th';
}

console.log(century)