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

let sum3 = 0;
let index = -1;

sum3 += marks[++index];
sum3 += marks[++index];
sum3 += marks[++index];
sum3 += marks[++index];

console.clear();
const jonas = [];

function marksAverage(marks){
    if (marks.length === 0){
        return "Pazymiu nera";
    }
    let suma = 0;
    for (i=0; i<marks.length; i++){
        suma += marks[i];
    }
    
    return "vidurkis: "+ (suma / marks.length);
}

console.log(marksAverage(jonas));
jonas.push(2);
jonas.push(3);
jonas.push(10);
console.log(jonas)
console.log(marksAverage(jonas));