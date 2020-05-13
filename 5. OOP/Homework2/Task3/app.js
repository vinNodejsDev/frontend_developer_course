// Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить, вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки текущего числа с которым производятся вычисления.

class Calculator {
    constructor(initValue) {
        this._currentValue = initValue;
    }

    get currentValue () {
        return this._currentValue;
    }

    set currentValue (value) {
        console.log(typeof value)
        if(typeof value === 'number') {
            this._currentValue = value;
        } else {
            console.log('please provide numbers only')
        }
    }

    add (value) {
        if(typeof value === 'number') {
            this._currentValue += value;
        } else {
            console.log('please provide numbers only')
        }
    }

    substract (value) {
        if(typeof value === 'number') {
            this._currentValue -= value;
        } else {
            console.log('please provide numbers only')
        }
    }

    multiply (value) {
        if(typeof value === 'number') {
            this._currentValue *= value;
        } else {
            console.log('please provide numbers only')
        }
    }

    divide (value) {
        if(typeof value === 'number') {
            this._currentValue /= value;
        } else {
            console.log('please provide numbers only')
        }
    }


}