const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject('error'), 1000);
});

console.log(promise);

promise
    .then((res) => {console.log(res); return res})
    .then((y) => console.log(y))
    .catch(err => console.log(err));

// promise.then((res) => console.log(res))