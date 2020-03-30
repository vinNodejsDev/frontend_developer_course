// 1
// Используя rest оператор и деструктуризацию, создать функцию,
//     которая принимает любое количество аргументов и возвращает объект,
//     содержащий первый аргумент и массив из остатка:
//
//     func(‘a’, ‘b’, ‘c’, ‘d’) →
// {
//     first: ‘a’,
//     other: [‘b’, ‘c’, ‘d’]
// }


function func(first, ...other) {
    return {
        first,
        other
    }
}
console.log(func('a', 'b', 'c', 'd'))



// 2. Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и
// первые две компании из массива partners:
//
//     const organisation = {
//         name: 'Google',
//         info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing']   }
// };
// getInfo(organisation); →
// Name: Google
// Partners: Microsoft Facebook

const organisation = {
    name: 'Google',
    info: {
        employees: ['Vlad', 'Olga'],
        partners: ['Microsoft', 'Facebook', 'Xing']
    }
};

function getInfo({name='Unknown',
                 info: {
                     partners: [
                         company1='company1',
                         company2='company2',
                         ...rest
                     ] }} = {}) {
    return `
    Name: ${name}
    Partners: ${company1}, ${company2}
    `;
}

console.log(getInfo(organisation));