//objects have methods (things they can do) and properties
//object literals
let user = {
    name: 'crystal',
    age: 30,
    email: 'crystyal@thenetninja.co.uk',
    locations: 'berlin',
    blogs: ['why mac & cheese rules', 'one thing'],
    login: function() {
        console.log('the user logged in');
    },
    logout: function() {
        console.log('the user logged out');
    },
    logBlogs: function() {
        //this keyword
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

console.log(user);
console.log(user.name);
user.age = 35;
console.log(user);
console.log(user['email']);
user['name'] = 'chun-li';
console.log(user);
console.log(typeof user);
user.login();

console.log(user.name.toUpperCase());
user.logout();

user.logBlogs();

//console.log(this); // here this refer the window object of JS



