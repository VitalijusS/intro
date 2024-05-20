/* 
ARROW FUNCTION (lambda) => rodykline funkcija
*/

const n1 = 7;
const n2 = 5;
//function declaration 
function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`)

//kintamajam prioskirta anonimine funkcija
const dif = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${dif(n1, n2)}`)

//arrow function
const multi = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${multi(n1, n2)}`)

//jei 1 procedura
const div = (a, b) => a / b;

console.log(`${n1} / ${n2} = ${div(n1, n2)}`)

//jei tik 1 parametras galima nerasyt ()
const square = n => n * n;

console.log(square(9))

const hi = name => `My name is ${name}!`;

console.log(hi('Jonas'))

const abbr = (first, last) => `${first[0]}.${last[0]}.`
console.log(abbr("Jonas", 'Jonaitis'))