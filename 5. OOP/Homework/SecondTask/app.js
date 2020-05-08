// Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование 


function Building(name, amountOfStages) {
    this.name = name;
    this.amountOfStages = amountOfStages;
    this.getAmountOfStages = function () {
        return this.amountOfStages;
    };
    this.setAmountOfStages = function (newAmount) {
        this.amountOfStages = newAmount;
    }
}

const build1 = new Building('Tower', 82)

// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}

function LivingBuilds(name, amountOfStages, amountOfFlats) {
    Building.apply(this, arguments);
    this.amountOfFlats = amountOfFlats;
    this.getAmountOfStages = function() {
        return {stages: this.amountOfStages, amountOfFlats: this.amountOfFlats};
    }
}

const apartments = new LivingBuilds('Luxury District', 32, 10);

// У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)
function Mall(name, amountOfStages, amountOfStores) {
    Building.apply(this, arguments);
    this.amountOfStores = amountOfStores;
    this.getAmountOfStages = function () {
        return {stages: this.amountOfStages, amountOfStores: this.amountOfStores};
    }
}

const CracowMall = new Mall('Krakow', 5, 50);