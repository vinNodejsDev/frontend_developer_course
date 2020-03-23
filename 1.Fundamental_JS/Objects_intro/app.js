const user = {
    firstName: "Vitalii",
    age: 32,
    isAdmin: true,
    email: 'test@gmail.com',
    'user-address': {
        city: "Kiev",
        street: "Stusa"
    },
    skills: ['html', 'css', 'js']
};

let value;

value = user.firstName;
value = user['user-address']['city'];


console.log(value);

console.table(user);