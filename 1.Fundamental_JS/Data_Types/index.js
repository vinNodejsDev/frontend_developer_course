/*Типы данных*/

/** 1.Примитивные типы данных:
*
*  - Number: 1, 1.3, NaN, Infinity
* - String: 'Bla', "Bla", `Bla`
* - Boolean: true, false
* - Null: null
* - Undefined: undefined
* - Symbol()
*
* */

// Number
console.log(2010, 2020);
console.log(23*'a'); //NaN
console.log(1/0); // Infinity

// String
console.log('Hello');
console.log("World");
console.log(`User!`);

// Boolean
console.log(true,  false);

// null
console.log(null);

// Undefined
console.log(undefined); // Переменная без присвоеного значения равна undefined!

// Symbol
console.log(Symbol());

/** 2. Объекты (Reference type), Передаются по ссылке:
*
* - Object:{ name:  'Vitalik' }
*   * Array: [1, 'sfdwf', true];
*   * Function: function foo() {};
*   * Date: new Date();
*
* */
console.table({name: 'Murka', age: 4});
console.log([21, 'adas', true]);

/**
 * Особености:
 * 1. JS динамически типизированный язык
 * 2. Одна и та же переменная может хранить в себе любой тип данных
 * 3. Нам не нужно определять тип данных при создании переменных
 * 4. Если мы хотим использовать статическую типизацию мы можем использовать TypeScript или Flow
 */
