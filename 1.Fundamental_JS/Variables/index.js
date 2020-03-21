// var, let, const
 var name = 'Vasyl';
console.log(name);

name = 'Peter';
console.log(name);

var surname;
console.log(surname);
surname = 'Stus';
console.log(surname);

var _name = 'Jack';
var $name = 'Jack';
// != var 1name;

// Camel case
var userAge = 32;

// Underscore case
var user_age = 44;

// Class naming only
var UserAge = 66;


// First issue with VAR
var car = 'bmw';
var car = 'audi';
console.log(car);

// Second issue: эффект хойстинга, определение зарание
console.log(plane);//undefined
var plane = 'Boing';

console.clear();

// let
let nickname = 'Snoop Dog';
console.log(nickname);

//Error: let nickname = 'dog'

// const имеет похожее поведение с let
const firstName = 'Joe';
// != firstName = 'John';

// const не можно объявлять без значения
// const userCar;

// const мутабельны, то есть объект в конст можно менять
const user = {
  name: firstName,
  age: user_age
};
console.table(user);

user.age = 42;
console.table(user);
