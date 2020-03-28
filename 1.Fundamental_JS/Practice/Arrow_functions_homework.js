// function sum() {
//     const params = Array.prototype.slice.call(arguments);
//
//     if (!params.length) return 0;
//
//     return params.reduce(function (prev, next) { return prev + next; });
// }
//
// sum(1, 2, 3, 4); // 10
// sum(); // 0

const sum = (...props) => {
    const params = Array.prototype.slice.call(props);
    if (!params.length) return 0;

    return params.reduce((prev, next) => {return prev + next});
};


// function convertToObject(num) {
//
//     const obj = {
//
//         value: num,
//
//         isOdd: Boolean(num % 2)
//
//     }
//
//     return obj;
//
// }

const convertToObject = num => {
    const obj = {
        value: num,
        isOdd: Boolean(num % 2)
    };
    return obj;
};