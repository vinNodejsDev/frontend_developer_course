const user = {
    firstName: 'Vitalii',
    lastName: 'Kushnir',
    age: 25,
    info: {
        work: 'EasyCode',
        skills: ['html', 'css']
    }
};

// const firstName = user.firstName;
// const lastName = user.lastName;

//Должны называться так же как в объекте
// const { firstName: name, lastName, age:userAge=30 } = user;
// console.log(name, lastName, userAge);

// const {
//     info: {work, skills}
// } = user;

// console.log(work, skills);

const colors = ['black', 'white', 'blue'];
const [black, ...colors2] = colors;
// console.log(black, colors2);

const nestedArr = ['hello', ['bye', 'good bye']];
const [, [w1, w2]] = nestedArr;
// console.log(w2);

const names = ['Petro', 'Ivan', 'Vasyl'];
const newNames = [...names];

// console.log(...newNames);

const colorsNames = [...colors, ...names];
// console.log(colorsNames);

const modifiedUser = { ...user, age: 22 };
console.log(modifiedUser);

const { info: {
    skills: [html, css]
}} = modifiedUser;
// console.log(html)

function myPerson({lastName='&', firstName='&&', info: {skills}}={}) {
    console.log(lastName, firstName, skills)
}

// myPerson(modifiedUser);

function foo(x, y, ...rest) {
    console.log(arguments);
    // console.log(Array.prototype.slice.call(arguments));
    const [...args] = arguments;

    console.log(args);
    console.log(rest);
}

// foo(24,13, 23, 434, 'dsfsdfd');


const numbers = [232, 32, 232];

function foo2(x, y, ...rest) {
    console.log(y);
    console.log(rest)
}

foo2(...numbers)
