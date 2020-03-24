// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.
// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
// 3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
//     где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
//     6. Дан объект:
//     let list = {
//         name: ‘denis’,
// work: ‘easycode’,
// age: 29
// }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

//1
const str = 'i am in the easycode';
let newStr = '';
for (let i = 0; i < str.length; i++) {
    if (str[i-1] === ' ' || i === 0) {
        newStr += str[i].toUpperCase();
    } else {
        newStr += str[i];
    }
}

//2
const cipherStr = 'tseb eht ma i';
let strRes = '';
let i = cipherStr.length;
// while (i--) {
// //     strRes += cipherStr[i];
// // }
for (let j = cipherStr.length; j > 0; j--) {
    strRes += cipherStr[j-1];
}

//3
let res = 1;
for (let i = 10; i > 0;){
    res *= i;
    i--;
}

// 4
const str4 = 'JavaScript is a pretty good language';
let newStr4 = '';
for (let i = 0; i < str4.length; i++) {
    if (str4[i-1] === ' ' || i === 0) {
        newStr4 += str4[i].toUpperCase();
        continue;
    }
    if (str4[i] === ' '){
        continue
    }
    newStr4 += str4[i]
}

// 5
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let value of arr) {
    if (value % 2 === 1) {
        console.log(value)
    }
}

// 6
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
};
for (let key in list) {
    console.log(typeof list[key])
    if (typeof list[key] === 'string') {
        list[key] = list[key].toUpperCase();
    }
}



console.log(list);