// Есть класс Planet
// function Planet(name) {
//     this.name = name;
//     this.getName = function () {
//         return 'Planet name is ' + this.name;
//     }
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon’

function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}

const mars = new Planet('Mars');


function PlanetWithSatellite(namePlanet, satellite) {
    Planet.apply(this, arguments);
    this.satellite = satellite;
    const planet = this.getName(namePlanet);
    this.getName = function() {
        return planet + '. The satellite is ' + this.satellite;
    }
}