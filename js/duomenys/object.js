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

const stud4 = {
    isMarried: true,
    name: 'Petras',
    age: 66,
};

console.log(stud4.name);
console.log(stud4['name']);
const key = 'name';
console.log(stud4.key); // !!UNDEFINED 
console.log(stud4[key]);
console.clear();

function giveMe(data, key) {
    return data[key];
}
console.log(giveMe({ name: 'Jonas', age: 99 }, 'name'));
console.log(giveMe({ name: 'Jonas', age: 99 }, 'age'));
console.log(giveMe({ name: 'Jonas', age: 99 }, 'date'));
console.clear();


const sum = (a, b) => a + b;
function diff(a, b) {
    return a - b;
}

function calcObj(n1, operation, n2) {
    const mathFunction = {
        '+': sum,
        '*': (a, b) => a * b,
        '-': diff,
        '/': (a, b) => a / b,
        '**': (a, b) => a ** b,
    }
    return mathFunction[operation](n1, n2)
}
console.log(calcObj(7, '-', 5));
console.log(calcObj(7, '+', 5));
console.log(calcObj(7, '*', 5));
console.log(calcObj(7, '/', 5));
console.log(calcObj(7, '**', 5));


