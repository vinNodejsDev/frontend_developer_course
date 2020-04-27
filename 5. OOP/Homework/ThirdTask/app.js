// Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

function Furniture (name, price) {
    this.name = name;
    this.price = price;
}

Furniture.prototype.getInfo = function() {
    return 'Name: ' + this.name + '. \nPrice: ' + this.price;
};

const chair = new Furniture('chair', 240);

function OfficeFurniture(name, price, placeForComputer=false) {
    Furniture.apply(this, arguments);
    this.placeForComputer = placeForComputer;
}

OfficeFurniture.prototype = Object.create(Furniture.prototype);
OfficeFurniture.prototype.constructor = OfficeFurniture;

OfficeFurniture.prototype.getInfo = function(){
    const resString = this.placeForComputer ? 'There is a place for computer' : 'There is no place for computer';
    return {name: this.name, Price: this.price, additions: resString};
};

const table = new OfficeFurniture('table', 840, true);

function HomeFurniture(name, price, isCozzy=true) {
    Furniture.apply(this, arguments);
    this.isCozzy = isCozzy;
}

HomeFurniture.prototype = Object.create(Furniture.prototype);
HomeFurniture.constructor = HomeFurniture;

HomeFurniture.prototype.getInfo = function() {
    const resString = this.placeForComputer ? 'Cozzy furniture' : 'Usual furniture';
    return `${this.name}, ${this.price}, ${re}`
}

const bed = new HomeFurniture('bed', 3290, true);
