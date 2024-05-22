/* 
...
SPREAD operatorius
Destruktorizavimas
*/

const a = [1, 2, 3];
const b = a;
console.log(b)

a[0] = 44;
console.log(a);
console.log(b);
b[2] = 777;
console.log(a);
console.log(b);

let c = 12;
let d = c;
d += 12;
console.log(c);
console.log(d);

const e = [1, 2, 3];
const f = [...e];
console.log(e);
console.log(f);
e[1] = 7;
console.log(e);
console.log(f);

const g = [...e, ...f, ...e, 99999, ...f];
console.log(g)
console.log('-------------------------');

const obj1 = { name: 'jonas', age: 99 };
const obj2 = obj1;
obj1.name = 'JONAS';
console.log(obj1);
console.log(obj2);
const obj3 = { ...obj1 };
console.log(obj3)
obj1.age = 100;
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.clear();

const test = { '2': 'a', '7': 'a', ...e };
console.log(test);
const test1 = { ...e, 2: 123, 7: 'a' };
console.log(test1);

// const test2 = [...obj1];
// console.log(test2)

// const person = {
//     name: 'jonas',
//     age: 77,
// }
// const address = {
//     city: "Vilnius",
//     gatve: "Vilniaus g."
// }
// const full = { ...person, ...address, phone: 37068569984, name: 'JONAS' }
// console.log(full)