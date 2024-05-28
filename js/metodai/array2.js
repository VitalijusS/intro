const array = [1, 2, 3];
console.log(array.map(a => a * 2));

function map(list, mutation) {
    const result = [];
    for (const item of list) {
        result.push(mutation(item));
    }
    return result;
}

console.log(map([7, 8, 4, 6, 4, 681, 8, 4, 1, 3], n => n * 2));
console.log(map([7, 8, 4, 6, 4, 681, 8, 4, 1, 3], n => n * 3));
console.log(map([7, 8, 4, 6, 4, 681, 8, 4, 1, 3], n => 0));
console.log(map([7, 8, 4, 6, 4, 681, 8, 4, 1, 3], n => n + 1));
const strings = ['aaaaaf', 'bbbbbe', 'cccccd'];
console.log(strings.map(s => s.length));
console.log(strings.map(s => s[2]));
console.log(strings.map(s => s[2]));
console.log(strings.map(s => s.at(-1)));

const firstSymbol = s => s[0];
const lastSymbol = s => s.at(-1);

console.log(strings.map(firstSymbol));
console.log(strings.map(lastSymbol));

const marks = [2, 10, 8, 6, 4];
const updatedMarks = marks.map(n => n + 1 > 10 ? n : n + 1);
console.log(updatedMarks);
function increaseMarks(mark) {
    if (mark === 10) {
        return 10;
    }
    return mark + 1;
}
const updatedMarks2 = marks.map(increaseMarks);
console.log(updatedMarks2);
console.clear();
const randomNumbers = [-1, 10, true, false, 5, 3, 5.5, 7, 777, -3];
console.log(randomNumbers.filter(n => n > 0))
function filter(list, condition) {
    const ans = [];
    for (const value of list) {
        if (condition(value)) {
            ans.push(value);
        }
    }
    return ans;
}
console.log(filter(randomNumbers, n => n > 0 && Number.isInteger(n)))
console.log(randomNumbers.filter(n => Number.isInteger(n) && n > 0))
console.log(randomNumbers.filter(n => Number.isInteger(n)).filter(n => n > 0))


const dictionary = ['', 'a', 's', 'f', 'a', 'd', 't', 'g', 'y', 'g', 'd', 'f', 't', 'g', 'd', 't'];
dictionary.sort(); /// pakeicia esama masyva
console.log(dictionary);
const jonasMarks = [8, 2, 4, 6, 10];
jonasMarks.sort();
console.log(jonasMarks)
jonasMarks.sort((a, b) => b - a);
console.log(jonasMarks)

const students = [
    { name: 'Jonas', mark: 1 },
    { name: 'Antanas', mark: 10 },
    { name: 'Ona', mark: 5 },
    { name: 'Petras', mark: 9 },
]
students.sort((a, b) => a.mark - b.mark);
console.log(students);
console.log('maziausias vidurkis', students[0].mark);
console.log('maziausio autorius', students[0].name);

console.log('didciausias vidurkis', students.at(-1).mark);
console.log('didciausio autorius', students.at(-1).name);

//sort pagal vardus
function varduPalyginimas(a, b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name === b.name) {
        return 0;
    } else {
        return 1;
    }
}
students.sort(varduPalyginimas) //a-z
console.log(students)
students.sort((a, b) => a.name < b.name ? 1 : a.name > b.name ? -1 : 0) /// z-a
console.log(students)
