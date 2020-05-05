const getNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve('4'), 3000);
    // setTimeout(() => reject(new Error('Error')))
});

getNumber
    .then((res) => console.log(res))
    .catch(console.log)
    .finally(console.log('exit'));