/*
funkcijos
()-parametru blokas
{}-logikos blokas

*/

function pavadinimas() {

}

const a = pavadinimas();
console.log(a);

function empty() {
    return undefined
}
empty();
const b = empty();
console.log(b, empty());

function giveMeFive() {
    return 5
}
console.log(giveMeFive());
console.clear();


function dauginti(vienas, du = 1) {
    console.log(vienas * du)
    return vienas * du

}


function sakinys(vardas, pavarde) {
    return `Laba diena, as esu ${vardas} ${pavarde}!`
}
console.log(sakinys("Jonas", "Jonaitis"))

dauginti(7, 12)
dauginti(55, 111)
dauginti(7)

function like(name, age, thing) {
    return `Mano vardas yra ${name}, man ${age} metai ir as megstu ${thing}`
}
console.log(like("jonas", 99, "balionus"))
console.log(like())
console.log(like("Petras"))
console.log(like("Petras", 77))

console.clear();

function price(value) {
    const PVM = 1.21;
    return value * PVM
}
console.log(price(99.99))

let number = 0
console.log(number)
function add() {
    return number++
}
add();
console.log(number);
add();
add();
add();
add();
add();


console.clear()
function isPangram(string) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < alphabet.length; i++) {
        const stringLower = string.toLowerCase();
        if (stringLower.includes(alphabet[i]) == false) {
            return false
        }
    }
    return true
}


console.log(isPangram("a"));
console.log();
console.log(isPangram("1"));
console.log();
console.log(isPangram("qwertyuioplkjhgfdsazxcvbnm"));
console.log();
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log();
console.log(isPangram("asd321"));
console.log(isPangram('Cwm fjord bank glyphs vext quiz'));

console.clear();


function squareDigits(num) {
    let answer = "";
    const string = num.toString();

    for (let i = 0; i < string.length; i++) {
        let singleNumber = parseInt(string.charAt(i)) ** 2;
        answer += singleNumber.toString();
    }
    return answer
}
console.log(squareDigits(123456));
console.log(squareDigits(123));
console.log(squareDigits(3212));

console.clear();

function name(name) {
    return console.log(`Labas, ${name}`)
}

name("Elena")


function simbol(text) {
    return console.log(text.length)
}

simbol("asdASDFsd45");

console.clear();

/* Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉 */

const mark1W = 78;
const mark1H = 1.69;
const john1W = 92;
const john1H = 1.95;

const mark2W = 95;
const mark2H = 1.88;
const john2W = 85;
const john2H = 1.76;

const mark1BMI = mark1W / (mark1H ** 2);
const john1BMI = john1W / (john1H ** 2);
const mark2BMI = mark2W / (mark2H ** 2);
const john2BMI = john2W / (john2H ** 2);

const markHigherBMI = mark1BMI > john1BMI;
const markHigherBMI2 = mark2BMI > john2BMI;

console.log(markHigherBMI)
console.log(markHigherBMI2)

if (mark1BMI > john1BMI) {
    console.log(`Mark's BMI (${mark1BMI.toFixed(1)}) is higher than John's (${john1BMI.toFixed(1)})!`)
} else {
    console.log(`John's (${john1BMI.toFixed(1)}) is higher than Mark's BMI (${mark1BMI.toFixed(1)})!`)
}

if (mark2BMI > john2BMI) {
    console.log(`Mark's BMI (${mark2BMI.toFixed(1)}) is higher than John's (${john2BMI.toFixed(1)})!`)
} else {
    console.log(`John's (${john2BMI.toFixed(1)}) is higher than Mark's BMI (${mark2BMI.toFixed(1)})!`)
}



console.clear();
