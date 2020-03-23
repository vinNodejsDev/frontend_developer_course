// <, >, >=, <=, ==, ===, !=, !==

let value;

 value = 1 <= 2; // true
 value = 2 <= 2; //true

value = 1 == '1';
value = 1 === '1';

value = 1 != '1';
value = 1 !== '1';

// unicode letters comparing
value = 'a' < 'A';
value = 'a' > 'ab';

// value = 'A'.charCodeAt();
//
//
// value = 10;
//
// if (value === 10) {
//     console.log('value:', value)
// } else {
//     console.log('else')
// }

// ||, &&, !
// value = null;
//
// console.log(!!value);
//
// if(!value) {
//     console.log(value);
// }

value = [];

if (!value.length) {
    console.log('Array is empty!')
}

// object
user = {
    name: 'Vit'
};

if (user.name){
    console.log(user.name)
}

value = 1 || 0;

console.log(value);

let serveDevName = 'AWS';
let server = serveDevName || 'Default local server';
console.log(server)