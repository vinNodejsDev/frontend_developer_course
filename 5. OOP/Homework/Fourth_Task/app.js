// 4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)

function User(name, date) {
    this.name = name;
    this.date = date;
}

User.prototype.getInfo = function() {
    return `Name: ${this.name}, Date of registration: ${this.date}`;
}

// const user1 = new User('Valentin', '12-21-2020')


function Admin(name, date, superAdmin=false) {
    User.apply(this, arguments);

    this._superAdmin = superAdmin;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;
Admin.prototype.getInfo = function() {
    return `Name: ${this.name}, Date: ${this.date}, Is_Super_Admin: ${this._superAdmin}`;
};

function Guest(name, date, validDate='10 days') {
    User.apply(this, arguments);

    this.validDate = validDate;
}

Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

Guest.prototype.getInfo = function () {
    return `Name: ${this.name}, Date: ${this.date}, Expiration Date: ${this.validDate}`;
}