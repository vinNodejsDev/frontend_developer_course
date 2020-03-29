function getFullName(firstName, lastName) {
    console.log(firstName, lastName);
    
    return function () {
        return `${firstName} ${lastName}`;
    }
}

// getFullName('Ivan', 'Ivanov');

// const getname = getFullName('Vitalik', 'Petrov');
// console.log(getname());

function updateValue(val) {
    let x = val;
    const newLocal = function (num) {
        return (x += num);
    };
    return newLocal;
}

const updateVal = updateValue(2);
const updateVal2 = updateValue(2);
// console.log(updateVal(1));
// console.log(updateVal(0));
// console.log(updateVal2(3));
// console.log(updateVal2(0));


// Когда хотим скрыть некоторые переменные
function checkCredentials() {
    const login = 'test';
    const password = 'test1234';

    return {
        checkLogin(value) {
            return login === value; //мы не имеем прямого доступа к внутренним переменным извне 
        },
        checkPassword(value) {
            return password === value;
        }
    }
}

// const check = checkCredentials();
//
// console.log(check.checkLogin('test'));


// Может быть на собеседовании
function closureExample() {
    const arrOfFunc = [];
    let value = '';
    for (let i = 0; i < 10; i++) {
        value += i;
        arrOfFunc.push(function () {
            console.log(value, i);
        });
    }
    // console.log(arrOfFunc);
    return arrOfFunc;
}

const res = closureExample();
res[0]();
res[6]();

