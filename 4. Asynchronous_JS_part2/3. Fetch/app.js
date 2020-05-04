// fetch('https://jsonplaceholder.typicode.com/users/1/todos')
//     .then(response => {
//         return (response.json())
//     })
//     .then(todos => console.log(todos))
//     .catch(err => console.log(err))

function getTodo(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://jfsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(todoItem => resolve(todoItem))
            .catch(err => reject(err));
    });
}

// getTodo(3).then(console.log);

function getTodo2(id) {
    const [userType, userId] = id.split('-');
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then(response => response.json());
}

// getTodo2(4)
//     .then(todo => console.log(todo))
//     .catch(err => console.log(err));

// Catch unhandled errors!!!!!! 
function getTodo3(id) {
     return Promise.resolve().then(() => {
        const [userType, userId] = id.split('-');
        return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then(response => response.json());
     }) 
}

getTodo3(4)
    .then(todo => console.log(todo))
    .catch(err => console.log(err));