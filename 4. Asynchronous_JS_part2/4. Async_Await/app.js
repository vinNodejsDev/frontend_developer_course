// function getTodo3(id) {
//      return Promise.resolve().then(() => {
//         const [userType, userId] = id.split('-');
//         return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//                 .then(response => response.json());
//      }) 
// }

async function getTodo(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await response.json();
        return data;
    } catch(e) {
        console.log(e);
        Promise.reject(e);
    }
    
}

// getTodo(4)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

async function getAll() {
    const [res1, res2] = await Promise.all([getTodo(3), getTodo(4)])
    console.log(res1, res2)
}

getAll();