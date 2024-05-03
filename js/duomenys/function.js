/*
funkcijos
()-parametru blokas
{}-logikos blokas

*/

function pavadinimas(){
    
}

const a = pavadinimas();
console.log(a);

function empty(){
    return undefined
}
empty();
const b = empty();
console.log(b, empty());

function giveMeFive(){
    return 5
}
console.log(giveMeFive());
console.clear();


function dauginti(vienas, du=1){
    console.log(vienas*du)
    return vienas * du

}


function sakinys(vardas, pavarde){
    return `Laba diena, as esu ${vardas} ${pavarde}!`
}
console.log(sakinys("Jonas","Jonaitis"))

dauginti(7,12)
dauginti(55,111)
dauginti(7)

function like(name, age, thing){
    return `Mano vardas yra ${name}, man ${age} metai ir as megstu ${thing}`
}
console.log(like("jonas", 99, "balionus"))
console.log(like())
console.log(like("Petras"))
console.log(like("Petras", 77))

console.clear();

function price(value){
    const PVM = 1.21;
    return value * PVM
}
console.log(price(99.99))

let number = 0
console.log(number)
function add(){
     return number ++
}
add();
console.log(number);
add();
add();
add();
add();
add();


console.clear()
function isPangram(string){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < alphabet.length; i++){
        const stringLower = string.toLowerCase();
        if (stringLower.includes(alphabet[i]) == false){
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


function squareDigits(num){
    let answer = "";
    const string = num.toString();

    for (let i = 0; i < string.length; i++){
        let singleNumber = parseInt(string.charAt(i))**2;
        answer += singleNumber.toString();
    }
    return answer
}
console.log(squareDigits(123456));
console.log(squareDigits(123));
console.log(squareDigits(3212));




