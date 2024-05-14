/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

const string = "Labas rytas!";
const string1 = 12;

console.log(string);
console.log("Labas rytas!");
console.log(string[0]);
console.log("Labas rytas!"[0]);
console.log(string.charAt(0));

console.log(string.charCodeAt(0));//simbolio kodas
console.log(string.charCodeAt(2));

console.log(string.concat(' again')); // sujungti

console.log(string.endsWith('s'));
console.log(string.endsWith('!'));
console.log(string.endsWith('rytas!'));

console.log(string.startsWith('as!'));
console.log(string.startsWith('La'));

console.log(string.includes('b', 'L'));
console.log(string.includes('z'));
console.log(string.includes('L', 0));
console.log(string.includes('a', 1)); // (a, index)

console.log(string.indexOf('x'));
console.log(string.indexOf('r'));
console.log(string.indexOf('ryt'));
console.log(string.indexOf('a', 5)); // (a, nuo kur pradeda ieskot)

console.log(string.lastIndexOf('a'));

console.log(string.repeat(10));

console.log(string.replace('a', 'A'));
console.log(string.replace('a', 'A').replace('L', 'l'));

console.log(string.replaceAll('a', 'A'));

console.log(string.slice(2));
console.log(string.slice(2, 3));
console.log(string.slice(2, -1));
console.log(string.slice(-5));


