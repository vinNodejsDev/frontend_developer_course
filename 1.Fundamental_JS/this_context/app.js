function getThis() {
    console.log(this);
}

function getPrice(currency) {
    console.log(this.price + currency);
    return this;
}

function getName() {
    console.log(this.name);
    return this;
}


// getThis()

const prod1 = {
    name: 'Intel',
    price: 230,
    getPrice: function () {
        console.log(`The price of product ${this.name} is ${this.price}`)
    },
    getName() {
        console.log(this.name)
    },
    info: {
        information: '3.2 GHz',
        getInfo: function () {
            console.log(this)
        }
    }
}

// prod1.getPrice();
// prod1.info.getInfo();
// prod1.getName()

// let str = 'Hello World';
// const reversedStr = str
//     .split('')
//     .reverse()
//     .join('');
// console.log(reversedStr)

const prod3 = {
    name: 'NVIDIA',
    price: 300,
    getName,
    getPrice
};

// prod3
//     .getName() // ok
//     .getPrice(); //Error: undefined.getPrice - return this

// getPrice.call(prod3, '$');
// getPrice.apply(prod3, ['E', '#']);

const getPriceBined = prod3.getPrice.bind(prod3, '$');
console.log(getPriceBined)

// NaN/undefined
setTimeout(prod3.getPrice, 1000);