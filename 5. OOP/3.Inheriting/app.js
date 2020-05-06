function Product(brand, price, discount) {
    // console.lo g(this);
    //1. Создаётся новый объект
    //2. На этот объект ссылается this
    //3.  Функция возвращает этот объект
    this.brand = brand; 
    this.price = price;
    this.discount = discount;
    // this.getDiscountedPrice = function() {
    //     return this.price * (100 - this.discount) /  100
    // }
}

Product.prototype.getDiscountedPrice = function() {
    return this.price * (100 - this.discount) /  100
}

Product.prototype.setNewPrice = function (newPrice) {
    this.price = newPrice
}

const apple = new Product('Apple', 100, 15);
const samsung = new Product('Samsungs', 150, 23 );

const protoForObj = {
    sayHello() {
        return 'Hello World';
    }
}

 const obj = Object.create(protoForObj, {
     firstName: {
         value: 'Vitalii'
     }
 });
//  console.log(obj)

function User(name, lastname) {
    this.name = name;
    this.lastname = lastname; 
}

User.prototype.getFullName = function() {
    return `${this.name} ${this.lastname }`;
}

User.prototype.sayHello = function() {
    return `Hello ${this.name} ${this.lastname }`
}

const user1 = new User('Vitalii', 'Kushnir');

function Customer(name, lastname, membership) {
     User.apply(this, arguments);

     this.membership = membership;
}

// Без данных строк методы наследоваться не будут
Customer.prototype = Object.create(User.prototype);
Customer.prototype.constructor = Customer; 

Customer.prototype.getMembership = function () {
    return `${this.membership.toUpperCase() }`
}

const customer1 = new Customer('Petro', 'Petrov', 'Vip ')