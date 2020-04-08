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
    name: "name",
    email: "email",
    balance: "balance"
};

function generateThead(tableSchema) {
    const thead = document.createElement('thead');
    const tr = generateTr(tableSchema, "th");
    thead.appendChild(tr);
    return thead;
}

function generateTr(tableSchema, tagName="td") {
    const tr = document.createElement("tr");
    Object.values(tableSchema).forEach(value => {
        const td = document.createElement(tagName);
        td.textContent = value;
        tr.appendChild(td);
    });
    return tr;
}

function generateBody(tableSchema, items) {
    const tbody = document.createElement('tbody');
    items.forEach((item, index) => {
        item.index = index + 1;
        const itemSchema = generateItemsSchema(tableSchema, item);
        // console.log(itemSchema)
        const tr = generateTr(itemSchema, 'td');
        tbody.appendChild(tr);
    });
    return tbody;
}

function generateItemsSchema(tableSchema, item) {
    // console.log(Object.keys(tableSchema))
    const itemSchema = Object.keys(tableSchema).reduce((acc, key) => {
        // console.log(acc, key)
        if (key in item) {
            acc[key] = item[key];
            // console.log(key, acc[key])
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
    // console.log(total);
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const columnsCount = Object.keys(tableSchema).length;
    // console.log(columnsCount);
    td.insertAdjacentHTML("beforeend", `Total balance is: <b>${total}</b>`);
    // console.log(td);
    td.setAttribute('colspan', String(columnsCount));
    td.setAttribute('align', 'right');
    tr.appendChild(td);
    return tr;
}


function initTable(tableSchema, items) {
    const container = document.querySelector('.table-container');

    // 1. Create table
    const table = generateTableTemplate();

    // 2. Add headers of columns
    const header = generateThead(tableSchema);

    // 3. Add body of the table
    let body = generateBody(tableSchema, users);

    // 4. Add total balance
    const total = generateTotalBalance(tableSchema, items);

    table.appendChild(header);
    table.appendChild(body);
    table.appendChild(total);

    container.appendChild(table);
}

initTable(tableSchema, users);

// 5. Sort button
const button = document.querySelector('.btn');

// Event listener to Sort button
button.addEventListener("click", onClickButton);

function onClickButton(e) {
    // table.replaceChild(generateBody(tableSchema, sortItems(users)), body);

    // if(e.target.classList.toggle('toLow')) {
    //
    // }
    if (!Array.from(e.target.classList).includes('toLow')) {
        changeContent(true);
        e.target.classList.toggle('toLow');
        return;
    }
    changeContent();
    e.target.classList.toggle('toLow');
}

function changeContent(toLowest=false) {
    const table = document.querySelector('table');
    const tbody = document.querySelector('tbody');
    const itemsSorted = sortItems(users, toLowest);
    const newTbody = generateBody(tableSchema, itemsSorted);

    table.replaceChild(newTbody, tbody);
    return 'Sorted!'
}

function sortItems(items, toLowest=false) {
    let sign = 1;
    if(toLowest) {
        sign = -1;
    }
    return items.sort((prev, next) => sign*prev.balance - sign*next.balance);
}
