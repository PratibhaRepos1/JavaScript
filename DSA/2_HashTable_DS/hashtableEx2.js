let user = {
    age: 45,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('ahhhhhhh!');
    }
};

console.log(user.age); //O(1) 
user.spell = 'abra kadabra'; //O(1)
user.scream(); //O(1)