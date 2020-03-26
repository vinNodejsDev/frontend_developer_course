// function foo() {
//     console.log('hello world')
// }
//
// foo();
//
// //Данный код позволяет понять что функция это объект
// foo.field = 'field';
// console.log(foo.field)

// const arr = ['Ivan', 'Petro', 'Vitalik', 'Alex'];
// // [element.length of arr]
// let newArr = [];
// for(let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i].length);
// }
// console.log(newArr);
//
// let newArr2 = [];
// for(let i = 0; i < arr.length; i++) {
//     newArr2.push(arr[i].toUpperCase());
// }
// console.log(newArr2);

// map
const names = ['Ivan', 'Petro', 'Vitalik', 'Alex'];

function mapArray(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]))
    }
    return res;
}

function nameLength(item ) {
    console.log(item);
    return item.length;
}

function nameToUpperCase(item) {
    return item.toUpperCase();
}



const result = mapArray(names, nameLength);
const result2 = mapArray(names, nameToUpperCase);
// console.log(result);
// console.log(result2);

function greeting(firstName) {
    return function (lastName) {
        return `Hello ${firstName} ${lastName }`
    }
}

// const testGreet = greeting('Stepan');
// const fullName = testGreet('Petrov');
const fullName = greeting('Ivan')('Ivanov');

// console.log(fullName);

function question(job) {
    const jobDictionary = {
        developer: 'что такое JavaScript?',
        teacher: 'какому предмету вы обучаете студентов?'
    };
    // if(job === 'developer') {
    //     return function (name) {
    //         return `${name}, что такое JavaScript?`
    //     }
    // } else if (job === 'teacher') {
    //     return function (name) {
    //         return `${name}, какому предмету вы обучаете студентов?`
    //     }
    // }

    //simplified
    return function (name) {
        return `${name}, ${jobDictionary[job]}`
    }
}

const developerQuestion = question('developer');
console.log(developerQuestion('Vitalii'));

const teacherQuestion = question('teacher');
console.log(teacherQuestion('Vitalii'));
















