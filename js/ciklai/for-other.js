const words = [1, 2, 3, 4, 5]
const words2 = [9, 8, 7, 6, 5, 4, 3, 2, 1]

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    console.log(word);
}
//for-of
for (const word of words) {
    console.log(word);
}
const students = [
    { name: 'Jonas', age: 99, },
    { name: 'maryte', age: 89, },
    { name: 'tomas', age: 79, },
    { name: 'petras', age: 69, },
];
for (const student of students) {
    console.log(student);
}

let i = 0;
while (i < words2.length) {
    console.log(words2[i++])
}

let whileI2 = 0;
while (true) {
    console.log(whileI2++);
    if (whileI2 > 10) {
        break;
    }
}
console.clear();
let sum = 0;
let count = 0;
const hackerMarks = [10, 8, 2, -5, 'du', Infinity, 6, 4];

for (const mark of hackerMarks) {
    if (typeof mark !== 'number'
        || mark < 0
        || mark > 10
        || mark % 1 !== 0) {
        continue;
    }
    count++
    sum += mark;
}
console.log(sum / count)