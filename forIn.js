let person = {
    name:"Pratibha",
    age: 35
};

for(p in person){
    console.log(p, person[p]);
}

//array
const colors = ['red','green', 'blue'];
for (let index in colors)
{
    console.log(index, colors[index]);
} 

//for-of loop

const days = ['Montag', 'Dinestag','Mittwoch'];
for (let day of days){
    console.log(day);
}