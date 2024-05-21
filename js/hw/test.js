let d2 = 0;
let d3 = 0;
let s17 = 0;
let s18 = 0;
for (i = 0; i < 1000000; i++) {
    if (((Math.floor(Math.random() * (617 - 22)) + 23)) === 22) {
        d2++;
    } else if (((Math.floor(Math.random() * (617 - 22)) + 23)) === 23) {
        d3++;
    } else if (((Math.floor(Math.random() * (617 - 22)) + 23)) === 617) {
        s17++;
    } else if (((Math.floor(Math.random() * (617 - 22)) + 23)) === 618) {
        s18++;
    }
}
console.log('22 ', d2);
console.log('23 ', d3);
console.log('617 ', s17);
console.log('618 ', s18);