console.log('Task 1');
setTimeout(() => setTimeout(() => console.log('Task 2')));
setTimeout(() => console.log('Task 3'));

console.log('Task 4');
