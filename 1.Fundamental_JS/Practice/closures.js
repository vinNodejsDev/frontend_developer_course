// 1
// Создайте функцию которая бы умела делать:
//     minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.

function minus(num1) {
    return function (num2) {
        return num1 - num2;
    }
}

console.log(minus(4)(5));



// 2
// Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
//     function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)


function multiplyMaker(num1) {
    let res = num1;
    return function (num2) {
        return res *= num2;
    }
}

const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
console.log(multiply(1)); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)

console.log(multiply(10)); // 120 (12 * 10))









// 3
// Реализовать модуль, который работает со строкой и имеет методы:
//     a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
//     модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5
const revertString = (function() {
    let strRes;

    function setString(strInput) {
        if (strInput.length === 0) {
            console.log('empty');
            return strRes = '';
        } else if (typeof strInput === 'number') {
            strRes = strInput.toString();
        }
        strRes = String(strInput);
    }

    function getString() {
        return strRes;
    }

    function getLength() {
        return strRes.length;
    }

    function getReversedStr() {
        return strRes.split('').reverse().join('');
    }

    return {
        setString: setString,
        getString: getString,
        getLength: getLength,
        getReversedStr: getReversedStr
    }
})();

// console.log(revertString.setString('abcde'));
// console.log(revertString.getString());
// console.log(revertString.getLength());
// console.log(revertString.getReversedStr());
// console.log(revertString.getString());






// 4
// Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень.
// Конечное значение округлить до двух знаков после точки
// (значение должно храниться в обычной переменной, не в this).
//
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
//
// Также можно вызывать методы цепочкой:
//     модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const calculator = {
    res: 0,

    setValue(value) {
        if(isNaN(Number(value))) {
            return new Error('Please provide a number')
        }
        res = Number(value);
        return this;
    },

    addNum(value) {
        res += value;
        return this;
    },

    subtract(value) {
        res -= value;
        return this;
    },

    multiply(value) {
        res *= value;
        return this;
    },

    divide(value) {
        res /= value;
        return this;
    },

    raiseToThePowerOf(value) {
        res = res ** value;
        return this;
    },

    getRes() {
        console.log(res);
    }
};

console.log(calculator.setValue('42'));
calculator.getRes();
calculator.addNum(8);
calculator.getRes();
//
// console.log(calculator.setValue('10').);
    // .raiseToThePowerOf(3)
    // .getRes()

calculator.setValue(10).raiseToThePowerOf(2).getRes();

// return {
//     setValue: setValue,
//     getRes: getRes,
//     addNum: addNum,
//     subtract: subtract,
//     multiply: multiply,
//     divide: divide,
//     raiseToThePowerOf: raiseToThePowerOf
// }
