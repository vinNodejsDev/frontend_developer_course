const firstName = 'Vitalii';
const lastName = 'Kushnir';
const age = 23;
const str = `Hello, my name is ${firstName}`;

let value;

value = firstName + ' ' + lastName;
value += '. I am ' + age;

value = firstName.length;
value = firstName[3-1];

value = lastName[lastName.length-1];

// uppercase/ lowercase
value = firstName.toUpperCase();
value = firstName.toLowerCase();

value = firstName.concat(' ', lastName);

//indexOf()
value = firstName.indexOf('i', 5); // substring, start index

value = firstName.indexOf('v');
// регистр имеет значение: при отсутствии результата -1 возвращается

value = str.includes('ELLO');

// Методы для взятие части строки
value = str.slice(0, 5); // start, end
value = str.slice(6); // start

// replace

value = str.replace('Hello', 'Bye')


console.log(value);