// Копирование и некоторые методы объектов

// Копирование поверхностное Object.assign()
let obj1 = {
    name: 'Vitalii'
};

let obj2 = {
    name: 'IVan',
    age: 20
}

// let newObj = obj1; // just a link
// console.log(newObj === obj1)

let newObj = Object.assign({}, obj1, obj2);
console.log(newObj === obj1);
console.log(newObj);


let newObj2 = Object.assign(obj1, obj2); // !!!!!!
console.log(obj1);


// Глубокое копирование
let newObj3 = Object.assign({}, obj2, obj1);

console.log(JSON.stringify(newObj3));

newObj3= JSON.parse(JSON.stringify(obj1));
console.log(newObj3 === obj1);

let keys = Object.keys(obj2);
console.log(keys);
let values = Object.values(obj2);
console.log(values);
let entries = Object.entries(obj2)
console.log(entries);

let fromEntries = Object.fromEntries(entries);
console.log(fromEntries);



