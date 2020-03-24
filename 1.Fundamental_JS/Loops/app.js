console.log('Loops');

// while, do while, for, for of, for in

//  //while
// let i = 0;
// while(i++< 10) {
//     console.log(i);
//     // i++;
// }
//
// let j = 10;
//
// while(j--) {
//     // till false or 0
//     console.log(j);
//     // i++;
// }

//do while
// do {
//     console.log(i);
// } while (i++ < 10)

//for
//
// for (let i = 0;i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }
//     if (i === 8) {
//         break
//     }
//     console.log(i)
// }

// let str = 'Hello';
// let res = '';
//
// for ( let i = 0; i < str.length; i++) {
//     // console.log(str[i] + '!')
//     res += str[i] + '__';
// }
//
// console.log(res);

// let colors = ['white', 'black', 'red', 'green', 'blue', 'pink', 'orange', 'yellow', 'grey', 'lightblue'];
// for (let i = 0; i < colors.length; i++) {
//     // console.log(colors[i])
//     colors[i] = colors[i].toUpperCase()
// }
// console.log(colors)

// const users

const users = [
    {
        name: 'Ivan',
        nickname: 'Topor'
    },
    {
        name: 'Stepan',
        nickname: 'Pila'
    },
    {
        name: 'Omelan',
        nickname: 'Vinyk'
    }
];
//
// const usersObject = {};
//
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].name);
//     usersObject[users[i].name] = users[i]
// }
// console.log(usersObject)

// const user = {
//     name: 'Vitalii',
//     age: 22
// };
//
// //for in
// for (let key in user) {
//     console.table(key, user[key]);
// }

for (let value of users) {
    console.log(value)
}