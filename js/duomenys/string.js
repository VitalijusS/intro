/* 
String - tekstas


*/


const name1 = 'Jonas';
console.log(name1);
const name2 = "Maryte";
console.log(name2);
const sakinys ="Hello world!";
console.log(sakinys);
const kabutes1 = "'"
console.log(kabutes1);
const kabute2 = '"';
console.log(kabute2);
const kabutes12 = '" '+ "'"
console.log(kabutes12);
const kabutes12_1 = '" \'';
const kabutes12_2 = "\" ' \\";
console.log(kabutes12_1);
console.log(kabutes12_2);
console.clear();

const tur = "Pinigines turinys: ";
const pap = "Pinigine papildyta: ";
let pinigine = 0;
console.log(tur + pinigine + ";");
pinigine += 10;
console.log(pap + 10+ ";");
console.log(tur + pinigine+ ";");
pinigine += 90
console.log(pap + 90+ ";");
console.log(tur + pinigine+ ";");

console.clear();

function pinigai(pinigai){
    pinigine += pinigai
    console.log(pap + pinigai + ";");
    console.log(tur + pinigine + ";")
}

pinigine = 0;

pinigai(10);
pinigai(90);

pinigai(12);

function atimti(pinigai){
    pinigine -= pinigai
    console.log("Nuskaiciuoti pinigai: " + pinigai + ";");
    console.log(tur + pinigine + ";")
}
atimti(12);
pinigai(-50);
console.clear();

//******************************************************************************************************************************** */













