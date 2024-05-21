// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());


let herbas = 0;
let metimai = 1000000;
for (i = 0; i < metimai; i++) {
    if (Math.random() > 0.5) {
        herbas++
    }
}
console.log(herbas);
console.log(metimai - herbas);
// for (i = 0; i < 50; i++) {
//     console.log(Math.random())
// }

const step = 1 / 7;
console.log(Math.random() / step);// [0...7)
console.log(Math.random() * 7);// [0...7)


// for (i = 0; i < 50; i++) {
//     console.log(Math.floor(Math.random() / step))
// }

console.log('------------')
// const week = ['m', 'tu', 'w', 'th', 'f', 'st', 'su'];
// for (i = 0; i < 10; i++) {
//     console.log(week[Math.floor(Math.random() * week.length)])
// }
// console.log('------------')
// for (i = 0; i < 100; i++) {
//     console.log((Math.floor(Math.random() * 10)) + 1)
// }

//[23...617]

for (i = 0; i < 100; i++) {
    console.log(Math.floor(Math.random() * (617 - 22)) + 23)
}