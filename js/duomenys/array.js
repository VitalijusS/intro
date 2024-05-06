/* 
ARRAY - masyvas, sarasas, listas, matrica, kolekcija

*/

const empty = [];
console.log(empty);

const marks = [10, 1, 8, 4, 6];
console.log(marks);
let suma = 0;
marks.push(7,1,2,5)
console.log(marks);
for (i = 0; i < marks.length; i++){
    suma += marks[i];
}
console.log(suma/marks.length)
console.log(marks[-1])

