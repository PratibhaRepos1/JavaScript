//1. IF...Else
//Problem Statement : Display the greet according to time
//If the hour in between 6 am to 12 pm: Guten Morgen
//If the the hour in between 12 pm to 6 pm: Guten Tag
// After 6 pm: Gute Abend
//Consider time as 1 to 24 hrs

let hour = 23;

if(hour >= 6 && hour < 12)
{
    console.log('Guten Morgen');
}
else if(hour >= 12 && hour < 18)
{
    console.log('Guten Tag');
}
else
{
    console.log('Guten Abend');
}

//2. Swtich...case
//Problem Statement - based on role get the user type

let role = 'admin';

switch (role) {
    case 'guest':
    console.log('Guest User');
    break;

    case 'moderator':
        console.log('Moderator User');
        break;

    case 'admin':
        console.log('Admin User');
        break;

        default:
            console.log('Unknown User');
            break;
           
}

//same thing we can write through if else
if(role === 'guest') console.log('Guest User');
if(role === 'moderator') console.log('Moderator User');
if(role === 'admin') console.log('Admin User');
else console.log('Unknown User');

//3. For Loop: find odd numbers from 1 to 10
for(j = 1; j<=10; j++)
{
    if(j % 2 != 0) console.log(j);
}

//4. while loop

let i = 20;
while(i <= 30)
{
    if(i % 2 !== 0) console.log(i);
    i++;
}