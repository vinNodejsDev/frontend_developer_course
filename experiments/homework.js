function promiseCreator(time, res) {
    return new Promise(
        resolve => setTimeout(() => resolve(res), time)
    )
}

promiseCreator(1000, 'ok').then(console.log);
