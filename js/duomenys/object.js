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

const stud5 = {
    isMarried: true,
    name: 'ona',
    age: 66,
};
console.log(Object.entries(stud5).join(',').split(','))
console.log(stud5)

function parse(data) {
    let num = 0;
    let ans = [];
    const operations = {
        'i': (a) => num = a + 1,
        'd': (a) => num = a - 1,
        's': (a) => num = a ** 2,
        'o': (a) => ans.push(a),
    }
    for (i = 0; i < data.length; i++) {
        if ('idso'.includes(data[i])) {
            operations[data[i]](num);
        }
    }
    return ans;
}

console.log(parse("iiisdoso"), [8, 64]);
console.log(parse("iiisxxxdoso"), [8, 64]);

function persistence(num) {
    let ans = 0;
    let temp = 1;
    let list = (num + '').split("").map(Number)
    while (list.length > 1) {
        for (i = 0; i < list.length; i++) {
            temp *= list[i];
        }
        list = (temp + '').split("").map(Number)
        ans++;
        temp = 1;

    }
    return ans;
}


console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);


