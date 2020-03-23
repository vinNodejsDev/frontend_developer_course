let a = 0 || 'string'; //string

a = 1 && 'string'; // string

a = null || 25; // 25

a = null && 25; // null

a = null || 0 || 35; //35

a = null && 0 && 35;
//

console.log(a);

// Что отобразится в консоли. Почему?
//
//     12 + 14 + '12'
console.log(12 + 14 + '12')
//     3 + 2 - '1'
console.log(3 + 2 - '1') //4
// '3' + 2 - 1
console.log('3' + 2 - 1)
// true + 2
console.log(true + 2);
// +'10' + 1
console.log(+'10' + 1);


// undefined + 2
console.log(undefined + 2);

// null + 5
console.log(null + 5);

// true + undefined
console.log(true + undefined);

// 3
let option = 'hidden';

if (option === 'hidden') {

    option = 'visible';

} else {

    option = 'hidden';

}
console.log(option)

// 4
let num = 31;

if (!num) {
    num = 1;
} else if (num < 0) {
    num = 'less than zero';
} else if (num > 0) {
    num *= 10;
}

console.log(parseInt('15%'));
