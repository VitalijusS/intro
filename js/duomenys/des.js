const dict = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [word1, word2, word3, ...restOfDict] = dict;
console.log(word1);
console.log(word2);
console.log(word3);
console.log(restOfDict);

const person = {
    name: "ona",
    age: 69,
    isMarried: true,
}
const { isMarried, age } = person;

console.log(isMarried);
console.log(age);

const isMarried1 = person.isMarried;
const age1 = person.age;
console.log(isMarried1);
console.log(age1);

const { isMarried: ved, age: amz } = person;
console.log(ved);
console.log(amz);

function drinks(...list) {// surenka atskirus stringus i lista
    return `Gerimu kiekis: ${list.length}.`;
}
console.log(drinks('a', 'b', 'c', 'd'));

function iLike(name, ...list) {
    return `${name} megsta ${list.length} spalvas`;
}
console.log(iLike('Jonas', 'red', 'blue'))

function nextFunc(a, b, c, ...restParams) {// ... tik paskutinis ir vienintelis
    return null;
}
const marks = [2, 4, 6, 8, 10];
console.log(Math.max(marks))    /// NaN
console.log(Math.max(...marks))
