/* 
String - tekstas


*/


const name1 = 'Jonas';
console.log(name1);
const name2 = "Maryte";
console.log(name2);
const sakinys = "Hello world!";
console.log(sakinys);
const kabutes1 = "'"
console.log(kabutes1);
const kabute2 = '"';
console.log(kabute2);
const kabutes12 = '" ' + "'"
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
console.log(pap + 10 + ";");
console.log(tur + pinigine + ";");
pinigine += 90
console.log(pap + 90 + ";");
console.log(tur + pinigine + ";");

console.clear();

function pinigai(pinigai) {
    pinigine += pinigai
    console.log(pap + pinigai + ";");
    console.log(tur + pinigine + ";")
}

pinigine = 0;

pinigai(10);
pinigai(90);

pinigai(12);

function atimti(pinigai) {
    pinigine -= pinigai
    console.log("Nuskaiciuoti pinigai: " + pinigai + ";");
    console.log(tur + pinigine + ";")
}
atimti(12);
pinigai(-50);
console.clear();

//******************************************************************************************************************************** */

const HTML = '<header>\r\n\
\t<img>\r\n\
\t<nav>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t</nav>\r\n\
</header>'
console.log(HTML);

const backTick = `Labas rytas, Lietuva!`;
const HTML2 = `<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>`
console.log(HTML2)
console.log("labas" * 'rytas')

// let list = [];
// list.push('1234')
// const string = '1234'
// const string1 = 1234;
// console.log([string]);
// console.log(string.split(''));

function isrinktiRaides(tekstas, kelintaRaide) {
    let iskarpyta = '';
    if (typeof tekstas !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    }
    if (tekstas.length >= 100) {
        return 'Tekstas yra per ilgas'
    }
    if (tekstas.length <= 0) {
        return 'Tekstas yra tuscias'
    }
    if (typeof kelintaRaide !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo.'
    }
    if (kelintaRaide <= 0) {
        return 'Antrasis kintamasis turi buti didesnis uz nuli.'
    }
    if (kelintaRaide >= tekstas.length) {
        'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    }
    for (let i = 0; i < tekstas.length; i++) {
        iskarpyta += tekstas[i];
    }
    return iskarpyta;

}
console.log(isrinktiRaides('abcdefg', 2));
//rezultatas: “bdf”
console.log(isrinktiRaides('abcdefghijkl', 3));
//rezultatas: “cfil”
console.log(isrinktiRaides('abc', 0));
//rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log(isrinktiRaides('abc', 4));
//rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log(isrinktiRaides('1561', 2));
//rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”



