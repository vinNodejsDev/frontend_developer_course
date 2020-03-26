const numArr = [2, 25, 142, 32, 421];

let value;

value = numArr.length;

// Clear array
// numArr.length = 0;
// numArr.length = 100;

// value = Array.isArray(numArr);
value = numArr[2];

numArr[3] = 146;
value = numArr.indexOf(146);
value = numArr.push(100);//add to the end
value = numArr.pop(); // delete the last

value = numArr.unshift(111); //add at the beginning
value = numArr.shift(); // delete first element

value = numArr.slice(0, 2); // не изменяет входящий массив - при отсутствии параметров копирует входящий массив

value = numArr.splice(0, 2, 'one', 'two'); //delete and return the deleted meaning

value = numArr.reverse();

// Конкатенация
value = [].concat(numArr);

value = numArr.join(" ")

value = value.split(" ");

console.log(value, numArr);