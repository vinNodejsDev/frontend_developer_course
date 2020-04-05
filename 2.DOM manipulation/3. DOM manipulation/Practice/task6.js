// const fields = ["#", "name", "Email", "Balance"];
// const users = [
//     {
//         "_id": "5d220b10e8265cc978e2586b",
//         "isActive": true,
//         "balance": 2853.33,
//         "age": 20,
//         "name": "Buckner Osborne",
//         "gender": "male",
//         "company": "EMPIRICA",
//         "email": "bucknerosborne@empirica.com",
//         "phone": "+1 (850) 411-2997",
//         "registered": "2018-08-13T04:28:45 -03:00",
//         "nestedField": { total: 300 }
//     },
//     {
//         "_id": "5d220b10144ef972f6c2b332",
//         "isActive": true,
//         "balance": 1464.63,
//         "age": 38,
//         "name": "Rosalie Smith",
//         "gender": "female",
//         "company": "KATAKANA",
//         "email": "rosaliesmith@katakana.com",
//         "phone": "+1 (943) 463-2496",
//         "registered": "2016-12-09T05:15:34 -02:00",
//         "nestedField": { total: 400 }
//     },
//     {
//         "_id": "5d220b1083a0494655cdecf6",
//         "isActive": false,
//         "balance": 2823.39,
//         "age": 40,
//         "name": "Estrada Davenport",
//         "gender": "male",
//         "company": "EBIDCO",
//         "email": "estradadavenport@ebidco.com",
//         "phone": "+1 (890) 461-2088",
//         "registered": "2016-03-04T03:36:38 -02:00",
//         "nestedField": { total: 200 }
//     }
// ];
//
// // 1
// const content = document.createDocumentFragment();
//
// const table = document.createElement('table');
// table.className = 'table';
//
// const header = document.createElement('thead');
// const colsHeader1 = document.createElement('tr');
// for (title of fields) {
//     console.log(title);
//     const cell = document.createElement('th');
//     cell.innerText = title;
//     colsHeader1.appendChild(cell);
// }
// table.appendChild(colsHeader1);
//
// let totalBalance = 0;
//
// // 2
// for (user of users) {
//     const row = document.createElement('tr');
//
//     const userNum = document.createElement('td');
//     userNum.innerText = String(users.indexOf(user) + 1);
//     const name = document.createElement('td');
//     name.innerText = user.name;
//     const email = document.createElement('td');
//     email.innerText = user.email;
//     const balance = document.createElement('td');
//     balance.innerText = user.balance;
//     totalBalance += user.balance;
//     console.log(name);
//     row.appendChild(userNum);
//     row.appendChild(name);
//     row.appendChild(email);
//     row.appendChild(balance);
//     table.appendChild(row)
// }
//
// // 3 добавляем сумму по полю
// console.log(totalBalance);
// const totalBalanceRow = document.createElement('tr');
//
// const totalBalanceCell = document.createElement('td');
// totalBalanceCell.innerHTML = `Total Balance:<b> ${totalBalance}</b>`;
//
// totalBalanceRow.appendChild(totalBalanceCell);
// table.appendChild(totalBalanceRow);
//
//
//
//
//
//
// content.appendChild(table);
//
//
//
//
//
// // Условия:
// // 1. В конце таблицы обязательно последняя tr должна содержать total balance
// // всех пользователей из таблицы при этом он должен быть всегда выровнен
// // по правому краю.
//
//
//
// // 2. Количество пользователей может быть любым.
// // 3. Таблица и все ее содержимое должно создаваться через js, в разметке
// // у вас может быть только контейнер какой то.
// // 4. В коде у вас должна быть переменная которая будет содержать в виде объекта
// // список полей и заголовков th которые будут выводиться в таблице.
// // Что то типа { name: ‘Name’, email: ‘Email’... } соответственно ключ объекта
// // это ваше поле которое вы хотите вывести из объекта пользователя
// // а значение это заголовок th.
//
// // include into body
// document.querySelector('body').appendChild(content);


const users = [
    {
        "_id": "5d220b10e8265cc978e2586b",
        "isActive": true,
        "balance": 2853.33,
        "age": 20,
        "name": "Buckner Osborne",
        "gender": "male",
        "company": "EMPIRICA",
        "email": "bucknerosborne@empirica.com",
        "phone": "+1 (850) 411-2997",
        "registered": "2018-08-13T04:28:45 -03:00",
        "nestedField": { total: 300 }
    },
    {
        "_id": "5d220b10144ef972f6c2b332",
        "isActive": true,
        "balance": 1464.63,
        "age": 38,
        "name": "Rosalie Smith",
        "gender": "female",
        "company": "KATAKANA",
        "email": "rosaliesmith@katakana.com",
        "phone": "+1 (943) 463-2496",
        "registered": "2016-12-09T05:15:34 -02:00",
        "nestedField": { total: 400 }
    },
    {
        "_id": "5d220b1083a0494655cdecf6",
        "isActive": false,
        "balance": 2823.39,
        "age": 40,
        "name": "Estrada Davenport",
        "gender": "male",
        "company": "EBIDCO",
        "email": "estradadavenport@ebidco.com",
        "phone": "+1 (890) 461-2088",
        "registered": "2016-03-04T03:36:38 -02:00",
        "nestedField": { total: 200 }
    }
];

const tableSchema = {
    index: "#",
    name: "Name",
    email: "Email",
    balance: "Balance"
};

// Функции: создание шапки таблицы,  создание тела таблицы, создание суммы балансов

function generateThead(tableSchema) {
    const thead = document.createElement('thead');
    const tr = generateTr(tableSchema, 'th')
    thead.appendChild(tr);
    return thead;
}

function generateTr(tableSchema, tagName='td ') {
    const tr = document.createElement('tr');
    Object.values(tableSchema).forEach(val => {
       const td = document.createElement(tagName);
       td.textContent = val;
       tr.appendChild(td);
    });
    return tr;
}

function generateTbody (tableSchema, items) {
    const tbody = document.createElement('tbody');
    items.forEach((item, index) => {
        item.index = index+1;
        const itemSchema = generateItemsSchema(tableSchema, item);
        const tr = generateTr(itemSchema, 'td');
        tbody.appendChild(tr)
    });
    return tbody;
}

function generateItemsSchema(tableSchema, item) {
    const itemSchema = Object.keys(tableSchema).reduce((acc, key) => {
        if (key in item) {
            acc[key] = item[key]
        }
        return acc;
    }, {});
    return itemSchema;
}

function generateTableTemplate() {
    const table = document.createElement('table');
    table.classList.add('table');
    return table;
}

function generateTotalBalance(tableSchema, items) {
    const total = items.reduce((acc, item) => acc + parseFloat(item.balance), 0);
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const columnCounts = Object.keys(tableSchema).length;
    td.insertAdjacentHTML('beforeend', `Total balance: <b>${total}</b>`)
    td.setAttribute('colspan', columnCounts);
    td.setAttribute('align', 'right');

    tr.appendChild(td);

    return tr;
}


function initTable(tableSchema, items) {
    const container = document.querySelector('.table-container');
    const table = generateTableTemplate();
    const header = generateThead(tableSchema);
    const body = generateTbody(tableSchema, items);
    const total = generateTotalBalance(tableSchema, items);

    table.appendChild(header);
    table.appendChild(body);
    table.appendChild(total);

    container.appendChild(table)
}

initTable(tableSchema, users);