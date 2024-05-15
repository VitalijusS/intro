// function correctPolishLetters(string) {
//     var dict = { 'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z' };
//     return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
// }


function polish3(string) {
    const list = 'ąćęłńóśźż'.split('');
    let ans = '';
    for (i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "ą": ans += 'a'; break;
            case "ć": ans += 'c'; break;
            case "ę": ans += 'e'; break;
            case "ł": ans += 'l'; break;
            case "ń": ans += 'n'; break;
            case "ó": ans += 'o'; break;
            case "ś": ans += 's'; break;
            case "ź": ans += 'z'; break;
            case "ż": ans += 'z'; break;
            default: ans += string[i]; break;
        }
    }
    return ans;
}


function polish(string) {
    const pABC = 'ąćęłńóśźż';
    const eABC = 'acelnoszz';
    let ans = '';

    for (i = 0; string.length > i; i++) {
        const letter = string[i];
        let index = -1;
        for (j = 0; j < pABC.length; j++) {
            if (letter === pABC[j]) {
                index = j;
                ans += eABC[j];
            }
        }
        if (index === -1) {
            ans += letter;
        }
    }
    return ans
}



console.log(polish("Jędrzej Błądziński"), " ---- Jedrzej Bladzinski");
console.log(polish("Lech Wałęsa"), " ---- Lech Walesa");
console.log(polish("Maria Skłodowska-Curie"), " ---- Maria Sklodowska-Curie");
let a = 'aasdasd'

