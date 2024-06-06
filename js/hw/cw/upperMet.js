const text = 'Labas rytas';
const text2 = 'LABASRYTAS';

String.prototype.isUpperCase = function () {
    return this + '' === this.toUpperCase();
}
console.log(text.isUpperCase());
console.log(text2.isUpperCase());

Number.prototype.duoble = function () {
    return this * 2;
}
console.log((7).duoble())