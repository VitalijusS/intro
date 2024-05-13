/*
FOR - pagrindinis ciklas
 */
const array = ['a', 'b', 'c', 'd', 'e', 'f'];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log('-------------------')
for (i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}
console.log('-------------------')
for (let i = 0; i < array.length; i++) {
    console.log(array[array.length - 1 - i]);
}
