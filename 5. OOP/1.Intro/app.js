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

console.log(samsung);
