// Kintamųjų inicijavimas

//1 
const kint1 = 1;
console.log(kint1);
const kint2 = 2;
console.log(kint2);
const kint3 = 3;
console.log(kint3);
//2
const kint11 = "a";
console.log(kint11);
const kint21 = 'bb';
console.log(kint21);
const kint31 = "ccc";
console.log(kint31);
//3
const kint12 = [1, 2, 3, 4, 5];
console.log(kint12);
const kint22 = [6, 7, 8, 9, 10];
console.log(kint22);
const kint32 = [11, 12, 13, 14, 15];
console.log(kint32);
//4
const kint13 = ['1', '2', '3', '4', '5'];
console.log(kint13);
const kint23 = ['6', '7', '8', '9', '10'];
console.log(kint23);
const kint33 = ['11', '12', '13', '14', '15',];
console.log(kint33);

//Veiksmai su kintamaisiais

//1
console.log(kint1 + kint2 + kint3);
//2
console.log(kint11, ' ', kint21, ' ', kint31);
//3
console.log(kint12[0] - kint12[1] + kint12[2] - kint12[3] + kint12[4]);
console.log(kint22[0] - kint22[1] + kint22[2] - kint22[3] + kint22[4]);
console.log(kint32[0] - kint32[1] + kint32[2] - kint32[3] + kint32[4]);
//4
const sujungti = kint13[4] + ', ' + kint13[3] + ', ' + kint13[2] + ', '
    + kint13[1] + ', ' + kint13[0];
console.log(sujungti)
const sujungti2 = kint23[4] + ', ' + kint23[3] + ', ' + kint23[2] + ', '
    + kint23[1] + ', ' + kint23[0];
console.log(sujungti2)
const sujungti3 = kint33[4] + ', ' + kint33[3] + ', ' + kint33[2] + ', '
    + kint33[1] + ', ' + kint33[0];
console.log(sujungti3)

//Kintamųjų palyginimas

//1
console.log("------------------------------------------")
const ifKint1 = 1;
const ifKint2 = 2;

if (ifKint1 > ifKint2) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta.");
}
if (ifKint1 < ifKint2) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta.");
}
if (ifKint1 === ifKint2) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta.");
}
if (ifKint1 !== ifKint2) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta.");
}
if (ifKint1 >= ifKint2) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta.");
}
if (ifKint1 <= ifKint2) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta.");
}
//2
console.log("------------------------------------------")
const ifKint3 = kint21.length;
const ifKint4 = kint31.length;
//3
if (ifKint3 > ifKint4) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta.");
}
if (ifKint3 < ifKint4) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta.");
}
if (ifKint3 === ifKint4) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta.");
}
if (ifKint3 !== ifKint4) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta.");
}
if (ifKint3 >= ifKint4) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta.");
}
if (ifKint3 <= ifKint4) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta.");
}
//4
console.log("------------------------------------------")
const ifKint5 = kint22.length;
const ifKint6 = kint23.length;
//5
if (ifKint5 > ifKint6) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta.");
}
if (ifKint5 < ifKint6) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta.");
}
if (ifKint5 === ifKint6) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta.");
}
if (ifKint5 !== ifKint6) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta.");
}
if (ifKint5 >= ifKint6) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta.")
}
if (ifKint5 <= ifKint6) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta.");
}

//Ciklo for panaudojimas

//1
console.log("------------------------------------------")
let ciklas = 0;
for (i = 0; i <= 0; i++) {
    ciklas += i;
}
console.log(ciklas);
ciklas = 0;
for (i = 0; i <= 4; i++) {
    ciklas += i;
}
console.log(ciklas);
ciklas = 0;
for (i = 0; i <= 100; i++) {
    ciklas += i;
}
console.log(ciklas);
ciklas = 0;
for (i = 574; i <= 815; i++) {
    ciklas += i;
}
console.log(ciklas);
ciklas = 0;
for (i = -50; i <= 50; i++) {
    ciklas += i;
}
console.log(ciklas);
ciklas = 0;
for (i = -70; i <= 30; i++) {
    ciklas += i;
}
console.log(ciklas);
//2 
console.log("------------------------------------------")
const abcdef = "abcdef";
let fedcba = "";
for (i = abcdef.length; i !== -1; i--) {
    fedcba += abcdef.charAt(i);

}
console.log(fedcba)
console.log("------------------------------------------")
//3
let dalIs3 = 0;
let dalIs5 = 0;
let dalIs7 = 0;
for (i = 0; i <= 11; i++) {
    if (i % 3 === 0) {
        dalIs3++
    }
    if (i % 5 === 0) {
        dalIs5++
    }
    if (i % 7 === 0) {
        dalIs7++
    }
}
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra ${dalIs3} vienetai.`)
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra ${dalIs5} vienetai.`)
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra ${dalIs7} vienetai.`)

console.log("------------------------------------------")

dalIs3 = 0;
dalIs5 = 0;
dalIs7 = 0;
for (i = 8; i <= 31; i++) {
    if (i % 3 === 0) {
        dalIs3++
    }
    if (i % 5 === 0) {
        dalIs5++
    }
    if (i % 7 === 0) {
        dalIs7++
    }
}
console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 3 yra ${dalIs3} vienetai.`)
console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 5 yra ${dalIs5} vienetai.`)
console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 7 yra ${dalIs7} vienetai.`)

console.log("------------------------------------------")

dalIs3 = 0;
dalIs5 = 0;
dalIs7 = 0;
for (i = -18; i <= 18; i++) {
    if (i % 3 === 0) {
        dalIs3++
    }
    if (i % 5 === 0) {
        dalIs5++
    }
    if (i % 7 === 0) {
        dalIs7++
    }
}
console.log(`Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 3 yra ${dalIs3} vienetai.`)
console.log(`Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 5 yra ${dalIs5} vienetai.`)
console.log(`Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 7 yra ${dalIs7} vienetai.`)

//Funkcijos

//1
console.log("------------------------------------------")
function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

//2
console.log("------------------------------------------")
function daugyba(vienas, du) {
    const rezultatas = vienas * du;
    return rezultatas;
}

console.log(daugyba(kint1, kint2));
console.log(daugyba(kint3, kint2));
console.log(daugyba(kint1, kint3));
//3
console.log("------------------------------------------")

// function skaitmenuKiekisSkaiciuje(kint) {
//     if (Number.isInteger(kint) !== true) {
//         return 'Pateikta netinkamo tipo reikšmė.';
//     }
//     const skaicius = kint.toString().length;
//     return skaicius;

// }
console.log('////////////////////////////////////////')
function skaitmenuKiekisSkaiciuje(kint) {
    if (typeof kint !== 'number') {
        return "Pateikta netinkamo tipo reikšmė."
    }
    const n = kint + '';
    if (!isFinite(n)) {
        return "Pateiktas blogas skaicius"
    }
    let leng = n.length;
    if (kint < 0) {
        leng--;
    }
    if (kint % 1 !== 0) {
        leng--;
    }
    return leng;
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(-5));
console.log(skaitmenuKiekisSkaiciuje(5.11));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(Infinity));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));
//4
console.log("------------------------------------------")

function didziausiasSkaiciusSarase(list) {
    let didziausias = list[0];
    if (Array.isArray(list) !== true) {
        return 'Pateikta netinkamo tipo reikšmė.';
    } else if (list.length === 0) {
        return 'Pateiktas sąrašas negali būti tuščias.';
    }
    for (i = 0; i < list.length; i++) {
        if (list[i] > didziausias) {
            didziausias = list[i];
        }
    }
    return didziausias;
}

console.log(didziausiasSkaiciusSarase([1]));
//rezultatas: 1
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
//rezultatas: 3
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
//rezultatas: 78
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
//rezultatas: 69
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
//rezultatas: -1
console.log(didziausiasSkaiciusSarase('pomidoras'));
//rezultatas: 'Pateikta netinkamo tipo reikšmė.'
console.log(didziausiasSkaiciusSarase([]));
//rezultatas: 'Pateiktas sąrašas negali būti tuščias.'
//5
console.log("------------------------------------------")

function isrinktiRaides(pirmas, antras) {
    let answer = ""
    if (typeof pirmas !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo.'
    }
    if (typeof antras !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo.'
    }
    if (antras <= 0) {
        return 'Antrasis kintamasis turi būti didesnis už nulį.'
    }
    if (antras > pirmas.length) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.'
    }
    for (i = 0; i < pirmas.length; i++) {
        if ((i + 1) % antras === 0) {
            answer += pirmas.charAt(i);
        }
    }
    return answer;
}


console.log(isrinktiRaides('abcdefg', 2));
//rezultatas: 'bdf'
console.log(isrinktiRaides('abcdefghijkl', 3));
//rezultatas: 'cfil'
console.log(isrinktiRaides('abc', 0));
//rezultatas: 'Antrasis kintamasis turi būti didesnis už nulį.'
console.log(isrinktiRaides('abc', 4));
//rezultatas: 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.'
console.log(isrinktiRaides(1561, 2));
//rezultatas: 'Pirmasis kintamasis yra netinkamo tipo.'


//6
console.log("------------------------------------------")
function dalyba(vienas, du) {
    if (Number.isInteger(vienas) !== true || Number.isInteger(du) !== true) {
        return "Nera skaicius.";
    }
    if (du === 0) {
        return "dalyba is 0 negalima";
    }
    const answer = vienas / du;
    return answer;
}
console.log(dalyba('9', 9))
console.log(dalyba(9, '9'))
console.log(dalyba('9', '9'))
console.log(dalyba(9, 0))
console.log(dalyba(82, 9))
