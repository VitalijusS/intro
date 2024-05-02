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

