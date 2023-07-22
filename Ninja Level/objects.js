//object literals in javascript : (objects in java script have properties and methods)


let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal10@gmail.com',
    location: 'stuttgart',
    blogs: [
        {
            title: 'why me!',
            likes: 24
        },
        {
            title: '10 Rules to Success!',
            likes: 50
        }
    ],
    login: function() {
        console.log('user logged in');
    },
    logout: function() {
        console.log('logged out')
    },
    logBlogs: function() {
       this.blogs.forEach(blog => {
        console.log(blog.title, blog.likes);
       })
    }
}

console.log(user);
console.log(typeof(user));
console.log(user['email']);
console.log(user.age);
console.log('previous location:', user.location);

user['location'] = 'berlin';

console.log(user['location']);

//methods for object
user.login();
user.logBlogs();

console.log(this);
