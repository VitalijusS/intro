const matrix = [10, 2, 8, 4, 6, 777];

console.log(matrix);

for (i = 0; i < matrix.length; i++) {
    console.log(i, '-', matrix[i])
}

const students = [
    [10, 9, 5, 1, 8],
    [10, 9, 5, 9, 9],
    [1, 2, 5, 1, 4],
    [5, 5, 5, 5, 5]
]
console.log(students);
const jonoP = students[0];
console.log(jonoP[0]);
console.log(jonoP[1]);
console.log(jonoP[2]);
console.log(jonoP[3]);

console.log("-----------");

const marytP = students[0];
console.log(marytP[0]);
console.log(marytP[1]);
console.log(marytP[2]);
console.log(marytP[3]);

console.log("-----------");

for (i = 0; students[2].length > i; i++) {
    console.log(students[2][i]);
}
console.log("-----------");
