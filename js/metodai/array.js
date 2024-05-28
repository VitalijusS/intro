/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/
const marks = [10, 2, 8, 4, 6];
const abc = ['a', 'b', 'c', 'd', 'e'];
console.log([...marks.concat(12)]);
console.log([...marks.concat([12, 16], 20)]);
console.log([...marks, 12, ...[16, 20]]);
console.log([...marks].copyWithin(2, 0, 3))//nuo 2 pozicojos keicia reiksmes 0-3
console.log([...marks].fill('+'));
console.log([...marks].fill('+', 0, 2));// 0-2 intervalas 

const zuikiai = new Array(15);
console.log(zuikiai.fill('zuikis'))
console.log([1, 2, [3.6541, [3]], 2].flat());//nuima 1 lygi
console.log([1, 2, [3.6541, [3]], 2].flat(3));//nuima 3 lygius

console.log([...marks].includes('+'));
console.log([...marks].indexOf(8));//jei nera returnina -1
console.log([1, 2, [3.6541], [3], 2].indexOf([3]));//-1

console.log([...abc].join(', '));
const marks2 = [...marks]

console.log(marks2);
console.log(marks2.pop());//isima paskutini ir ji grazina
console.log(marks2);
console.log(marks2.pop(8));//isima paskutini ir ji grazina (nepriima prametru)
console.log(marks2);

const marks3 = [...marks]
console.log(marks3);
console.log(marks3.push(7));//ikelia reiksme ir grazina masyvo ilgi
console.log(marks3);

console.log(marks3.unshift(0));//ikelia i prieki 
console.log(marks3.unshift(3));
console.log(marks3);

console.log(marks3.shift());//pasalima reiksme is pirmo indexo ir ja grazina
console.log(marks3);

console.log([...marks].reverse());

const demo = ['labas', 'rytas', ',', 'lietuva', '!']
console.log(demo)//apsuka orginala
demo.reverse();
console.log(demo)
console.log('----------------')

const reversedDemo = demo.toReversed();//sukuria nauja apversta o orginala palieka
console.log(reversedDemo)
console.log(demo)




