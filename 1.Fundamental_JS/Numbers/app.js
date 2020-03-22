const num1 = 10;
const num2 = 20;

let value;

// + / * -

value = num1 + num2;
value += 100;
value = 4 % 2;

//increment (important in loops!)
value++;
value--;
++value;
--value;

//Неточные вычесления
value = 0.6 + 0.7; // 1.299999999 нюансы работы с паматью
value = +value.toFixed(2);
// or
value = (0.6 * 10 + 0.7 * 10) / 10;


// Math Object
value = Math.PI;
value = Math.random();

value = Math.round(2.4);
value = Math.ceil(2.1); // 3
value = Math.floor(2.9);
value = Math.min(2, 4, 2, 0.3);

value = Math.floor(Math.random() * 10 + 1); // random till 10;

const arr = ['white', 'black', 'red', 'green', 'blue', 'pink', 'orange', 'yellow', 'grey', 'lightblue'];

// Генератор случайного цвета
value = Math.floor(Math.random() * arr.length);

console.clear();
console.log(value, arr[value]);