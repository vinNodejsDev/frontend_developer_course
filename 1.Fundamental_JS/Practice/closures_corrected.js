// 1
function minus(num1=0) {
    return function (num2=0) {
        return num1 - num2;
    }
}
// console.log(minus(4)(2));

// 2
function multiplyMaker(num1=2) {
    let res = num1;
    return function (num2=1) {
        return res *= num2;
    }
}

const multiply = multiplyMaker(3);

// 3: Module revertString()
const revertString = (function () {
    let str = '';

    function setStr(val='') {
        str = String(val);
    }

    function getStr() {
        return str;
    }

    function getStrLength() {
        return str.length;
    }

    return {
        setStr,
        getStr,
        getStrLength
    }
})();


// 4
const numModule = (function () {
   let num = 0;

   function setNumber(val = 0) {
       num = Number(val);
       return this;
   }

   function plus(val) {
       num += Number(val);
       return this;
   }

    function minus(val = 0) {
        num -= Number(val);
        return this;
    }
    function divide(val = 0) {
        num /= Number(val);
        return this;
    }
    function multiply(val = 0) {
        num *= Number(val);
        return this;
    }

    function pow(ex = 2) {
        num = num ** Number(ex);
        return this;
    }

    function getNumber() {
        return Number(num.toFixed(2)) || 0;
    }

    return {
        setNumber,
        plus,
        minus,
        divide,
        pow,
        getNumber
    }
})();

console.log(
    numModule
        .setNumber(3)
        .pow(2)
        .getNumber()
)