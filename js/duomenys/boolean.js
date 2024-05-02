/*
BOOLEAN - logine reiksme 

-true
-false


operatoriai
- && (and)
-|| (or)

*/


const username = 'Jonas';
const age = 99;
const isSunShining = true;
const hasFuel = false;
console.log(isSunShining, hasFuel)

console.log('kaip nenaudoti: ', true + true);

console.log('-------------------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log('-------------------');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.clear();
//true
console.log(true && true || true);

console.log(true && true || false);

console.log(true && false || true);

console.log(false && true || true);

console.log(false && false || true);
//false
console.log(false && true || false);

console.log(true && false || false);

console.log(false && false || false);

console.clear();
//==========================================================
//true
console.log(true || true && true);

console.log(true || true && false);

console.log(true || false && true);

console.log(true || false && false);

console.log(false || true && true);
//false
console.log(false || false && true);

console.log(false || true && false);

console.log(false || false && false);

