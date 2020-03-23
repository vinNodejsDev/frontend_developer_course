// let a = 1;
// let b = 0;

// if (a > 0) {
//     b = a;
// } else {
//     b += 1;
// }

// a > 1 ? b = a : b+=1;

// b = a > 0 ? a : b+=1;
//
// console.log(b);
//
// let color  = '';
//
// switch (color) {
//     case 'yellow':
//         console.log('Color is yellow');
//         break;
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'orange':
//         console.log(`color is ${color}`);
//         break;
//     default:
//         console.log('No color!');
//
// }

// homework

let a = 'block';

if (a === 'block') {

    console.log('block')

} else if (a === 'none') {

    console.log('none')

} else if (a === 'inline') {

    console.log('inline')

} else {

    console.log('other')

}

a === 'block' ? console.log('block')
    : a ==='none'
        ? console.log('none')
    : a === 'inline'
        ? console.log('inline')
    : console.log('other');

// 2
let b = 'hidden';

if (b === 'hidden') {

    b = 'visible';

} else {

    b = 'hidden';

}

b = b === 'hidden' ? 'visible' : 'hidden';

console.log(b)

// 3
let c = 3;


//
// if (c === 0) {
//
//     c = 1;
//
// } else if (c < 0) {
//
//     c = 'less then zero';
//
// } else {
//
//     c *= 10;
//
// }

c = c === 0 ? 1 : c < 0 ? 'less then zero' : c*10

console.log(c)

