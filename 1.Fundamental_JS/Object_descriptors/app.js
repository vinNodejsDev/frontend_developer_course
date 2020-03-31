const car = {
    brand: 'BMW',
    year: 2020,
    get age() {
        return `Машина выпущена в ${this.year}`
    },
    set age(value) {
        this.year = value;
    }
};

// Object.defineProperty(car, 'age', {
//     // configurable: false
//     // enumerable: false
//     // writable: false
//     get: function() {
//         return `Машина выпущена в ${this.year}`
//     }
// });

// Object.defineProperty(car, 'year', {
//     enumerable: false
// }); Error because config is false

Object.defineProperty(window, 'globalVar', {
    set: function (value) {
        console.log(value);
        debugger;
    }
})


function foo() {
    globalVar = 10;
}

foo();