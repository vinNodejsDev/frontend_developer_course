const plus = (a, b) => a + b;
// console.log(plus(23, 42));

// function plus(a, b) {
//     return a + b;
// }

const withoutArgs = () => console.log('Hello World!');

const single = (x=1) => x * x;

//multiline
const moreActions = (a, b) => {
    a *= 3;
    b *= 4;
    return a + b;
};

const returnObj = (str='') => ({
    value: str,
    length: str.length
});
// console.table(returnObj('Vitalik'));


// function plusFoo(a, b) {
//     console.log(arguments);
//     return a + b;
// }
//
// plusFoo(1,3,42,21,13,12);

const obj = {
    age: 32,
    firstName: 'Vitalii',
    getFirstName() {
        console.log(this)
    },
    getAge: () => console.log(this)
};

// obj.getFirstName();
// obj.getAge();