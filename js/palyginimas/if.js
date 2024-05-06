/*
IF - palyginimas 

Palyginimo operatoriai:
VISI: <, >, <=, >=, ==, !=, ===, !==
NAUDOTINI: <, >, <=, >=, ===, !==
NENAUDOTINI: ==, !=


sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else{}
if () {} else if () {} ... else if () {}
if () {} else if () {} ... else if () {} else{}
*/

const age = 99;
const ageLimit = 18;

if (age < ageLimit){
    console.log("Per jaunas");
}else{
    console.log("Good to go");
}
const number = 1;

if(4!==2){
    console.log('Taip, daugiau');
} else{
    console.log('Ne, maziau');
}
console.clear();
const color = 'blue'
const color1 = 'white';
const color2 = 'black';
const color3 = 'red';
const color4 = 'orange';
const color5 = 'blue';
const color6 = 'yellow';
const color7 = 'green';
const color8 = 'pink';
const color9 = 'test';

let translation = '';

if (color === 'red'){
    translation = ('Raudona');
}else if(color === 'blue'){
    translation = ('Melyna');
}else if(color === 'green'){
    translation = ('Zalia');
}else{
    translation = ("Spalv nezinoma");
}
console.log('>>>', translation);

console.clear()

function colorTranslation(color){
    if (color === 'blue'){
        translation = ('Melyna');
    }else if(color === 'white'){
        translation = ('Balta');
    }else if(color === 'black'){
        translation = ('Juoda');
    }else if(color === 'red'){
        translation = ('Raudona');
    }else if(color === 'orange'){
        translation = ('Oranzine');
    }else if(color === 'yellow'){
        translation = ('Geltona');
    }else if(color === 'green'){
        translation = ('Zalia');
    }else if(color === 'pink'){
        translation = ('Rozine');
    }else{
        translation = "spalva nezinoma"
    }
    return console.log(color, '>>>', translation)
}
colorTranslation(color1);
colorTranslation(color2);
colorTranslation(color3);
colorTranslation(color4);
colorTranslation(color5);
colorTranslation(color6);
colorTranslation(color7);
colorTranslation(color8);
colorTranslation(color9);
