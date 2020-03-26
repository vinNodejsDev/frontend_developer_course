function sayHi(firstName='Ivan', lastName='Ivanow') {
    firstName = firstName.toUpperCase();
    lastName = lastName.toUpperCase();
    // console.log(`Hi there ${firstName} ${lastName}!`);
    return `Hi there ${firstName} ${lastName}!`;
}

// sayHi('vitalik', 'kushnir');
// let res = sayHi('vitalik', 'kushnir');
// let res2 = sayHi()
// console.log(res2);

// let x = 10;
//
// function foo(x) { // Задавая параметры в аргументах мы также объявляем этим локальные переменные
//     // let x = 20; не изменит глобальную переменную
//     x = 20; // изменит глобальную переменную
//     console.log(x);
// }
//
// foo();
// console.log(x)

// const user = {
//     name: 'Vitalii',
//     age: 25
// };
//
// function getObj(obj) {
//     console.log(obj);
//     obj.name = 'Star';
// }
//
// getObj(user);
// getObj(user);

// FE
// const  square = function (x) {
//     return x * x;
// };
//
// console.log(square(43));

//IIF
// (function (msg) {
//     console.log('I am IIF', msg)
// })('parameter');



function multiply(...args) {
    if(!args) {
        return 0;
    } else {
        let arr = [...args];
        console.log(arr);
        let res = 1;
        for (let i = 0; i < arr.length; i++) {
            res *= arr[i];
        }
        return res;
    }

}

console.log(multiply(2, 4, 5, 6));
// multiply();