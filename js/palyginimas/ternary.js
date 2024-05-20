/* 
Unary - vienybe (a++, a--)
Binary - dvejube (a+b)
Ternary- trejybe (a?b:c)
*/

let a = 0;
if (4 > 2) {
    a += 10;
} else {
    a -= 5;
}
console.log(a);

const b = 4 > 2 ? 777 : 666;
console.log(b);

const c = 4 < 2 ? 777 : 666;
console.log(c);

const d = 1 + 1 < 5 ? 12 : 20;
console.log(d);
const e = 1 + (1 < 5 ? 12 : 20);
console.log(e);
const f = (1 + 1) < 5 ? 12 : 20;
console.log(f);

const g = 'labas'.length > 0 ? 'Ilgas' : 'Tuscias';
console.log(g);

const h = 'pomidoras'[1 > 2 ? 0 : 4];
console.log(h)

const sum = (a, b) => a + b >= 0 ? (a + b) * 2 : a + b - 5;
console.log(sum(12, 5))


const j = a => a.length < 5 ? a[0] : a.at(-1);
console.log(j('asdddddz'));

