/* 
OBJECT - objektas
*/

const empty = {};
console.log(empty);

const stud1 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
console.log(stud1);
const stud2 = {
    isMarried: true,
    name: 'Maryte',
    age: 77,
};
console.log(stud2);
const stud3 = {
    isMarried: true,
    name: 'ona',
    age: 66,
};
console.log(stud3.name);
console.clear();
const students = [
    { name: 'Jonas', age: 99, isMarried: true, },
    { isMarried: false, name: 'Maryte', age: 77, },
    { isMarried: true, name: 'ona', age: 66, }
];
function intro(studentData) {
    return `Sveiki mano vardas ${studentData.name}, man ${studentData.age} metu ir esu ${studentData.isMarried ? 'vedes' : 'nevedes'}`
}
for (i = 0; i < students.length; i++) {
    console.log(intro(students[i]));
}