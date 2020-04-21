const btnGetUsers = document.querySelector('.btn-get-users');
const btnCreateUser = document.querySelector('.btn-add-user');
const container = document.querySelector('.container');
const formDiv = document.querySelector('.form-div');
const btnSubmit = document.querySelector('.btn-submit');



function getUsers(cb) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        cb(response);
        console.log(response)
    });

    xhr.addEventListener("error", (e) => {
        console.log(e.error);
    });

    xhr.send();
}

function createUser(body, cb ) {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jsonplaceholder.typicode.com/users");
    xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        cb(response);
    });

    xhr.addEventListener("error", () => {
        console.log("error");
    });

    xhr.setRequestHeader("Content-type", "application/json")

    xhr.send(JSON.stringify(body));
}

function cardTemplate(user) {
    const card = document.createElement('div');
    card.classList.add('card', 'mt-2', 'clickable');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const username = document.createElement('h5');
    username.classList.add('card-title');
    username.innerText = user.username;

    const details = document.createElement('div');
    details.classList.add('jumbotron', 'p-4', 'details', 'd-none');

    const name = document.createElement('p');
    name.innerHTML = `<b>Name:</b> ${user.name}`;

    const email = document.createElement('p');
    email.innerHTML = `<b>Email:</b> ${user.email}`;

    const phone = document.createElement('p');
    phone.innerHTML = `<b>Phone:</b> ${user.phone}`;

    const website = document.createElement('p');
    website.innerHTML = `<b>Website:</b> <a href='${user.website}'>${user.website}</a> `;

    card.addEventListener("click", (e) => {
        e.stopPropagation();
        details.classList.toggle("d-none");
    });

    //address
    const address = document.createElement('div');
    address.innerHTML = '<hr/><h5>Address</h5>';

    const street = document.createElement('p');
    street.innerHTML = `<b>Street:</b> ${user.address.street}`;

    const suite = document.createElement('p');
    suite.innerHTML = `<b>Suite:</b> ${user.address.suite}`;

    const city = document.createElement('p');
    city.innerHTML = `<b>City:</b> ${user.address.city}`;

    const zipCode = document.createElement('p');
    zipCode.innerHTML = `<b>ZIP code:</b> ${user.address.zipcode}`;

    address.appendChild(street);
    address.appendChild(suite);
    address.appendChild(city);
    address.appendChild(zipCode);
    //address

    //company
    const company = document.createElement('div');
    company.innerHTML = '<hr/><h5>Company</h5>';

    const companyName = document.createElement('p');
    companyName.innerHTML = `<b>Name:</b> ${user.company.name}`;

    const catchPhrase = document.createElement('p');
    catchPhrase.innerHTML = `<b>Catch Phrase:</b> ${user.company.catchPhrase}`;

    const bs = document.createElement('p');
    bs.innerHTML = `<b>Business:</b> ${user.company.bs}`;

    company.appendChild(companyName);
    company.appendChild(catchPhrase);
    company.appendChild(bs);
    //company


    details.appendChild(name);
    details.appendChild(email);
    details.appendChild(phone);
    details.appendChild(website);
    details.appendChild(address);
    details.appendChild(company);

    cardBody.appendChild(username);
    cardBody.appendChild(details);
    cardBody.appendChild(details);

    card.appendChild(cardBody);
    return card;
}

function getFormData() {
    const addUserForm = document.forms.addUserForm;
    return {
        id: Math.ceil(Math.random()*1000),
        name: addUserForm.name.value || 'default',
        username: addUserForm.username.value || 'default',
        email: addUserForm.email.value || 'default@dfd.er',
        phone: addUserForm.phone.value || '000000000000',
        website: addUserForm.website.value || 'default',
        address: {
            street: addUserForm.street.value || 'default',
            suite: addUserForm.suite.value || 'default',
            city: addUserForm.city.value || 'default',
            zipcode: addUserForm.zipcode.value || '00000',
        },
        company: {
            name: addUserForm.companyName.value || 'default',
            catchPhrase: addUserForm.catchPhrase.value || 'default',
            bs: addUserForm.bs.value || 'default'
        }
    };
}

function renderData(response) {
    const fragment = document.createDocumentFragment();
    response.forEach((user) => {
        const card = cardTemplate(user);
        fragment.appendChild(card);
    });
    container.appendChild(fragment);
}

btnGetUsers.addEventListener("click", (e) => {
   getUsers(renderData)
});

btnCreateUser.addEventListener("click", (e) => {
    formDiv.classList.toggle('d-none')
});

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
   const newUser = getFormData();
   createUser(newUser, (response) => {
        const card = cardTemplate(response);
        formDiv.insertAdjacentElement("afterend", card);
        console.log(response)
   });
   formDiv.classList.toggle('d-none');
});

