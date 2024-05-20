function toJadenCase(string) {
  let newString = string.charAt(0).toUpperCase();
  for (i = 1; i < string.length; i++) {
    if (string.charAt(i - 1) === " ") {
      newString += string.charAt(i).toUpperCase();
    } else {
      newString += string.charAt(i)
    }
  }
  return console.log(newString);
}





const str = "how can mirrors be real if our eyes aren't real";

toJadenCase(str);

String.prototype.toJadenCase = function () {
  let newString = this.charAt(0).toUpperCase();
  for (i = 1; i < this.length; i++) {
    if (this.charAt(i - 1) === " ") {
      newString += this.charAt(i).toUpperCase();
    } else {
      newString += this.charAt(i)
    }
  }
  return console.log(newString);
}
const str1 = "How can mirrors be real if our eyes aren't real";
str1.toJadenCase();
console.log('-------------------------------')
function alphabetPosition(text) {
  const lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let answer = "";
  for (i = 0; i < text.length; i++) {
    if (lowerAlph.includes(text.charAt(i).toLowerCase())) {
      answer += lowerAlph.indexOf(text.charAt(i).toLowerCase()) + 1 + " ";
    }
  }
  answer = answer.slice(0, -1);
  return console.log(answer);
}
alphabetPosition("Thesunsesetsattwelveoclock");
alphabetPosition("The narwhal bacons at midnight.");
console.log('-------------------------------')

function duplicateEncode(word) {
  let answer = '';
  let newWord = '';
  for (i = 0; i < word.length; i++) {
    let current = word[i];
    newWord = word;
    newWord = word.replace(word[i], "");
    if (newWord.toLowerCase().includes(current.toLowerCase())) {
      answer += ")";
    } else {
      answer += "(";
    }
  }
  return answer
}
console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success'));
console.log(duplicateEncode('Supralapsarian'));
console.log('-------------------------------')


function highAndLow(numbers) {
  const list = numbers.split(" ");
  let high = list[0];
  let low = list[0];
  for (i = 0; i < list.length; i++) {
    if (parseInt(list[i]) > high) {
      high = parseInt(list[i]);
    }
    if (parseInt(list[i]) < low) {
      low = parseInt(list[i]);
    }

  }
  console.log(list)
  return `${high} ${low}`;
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log('-------------------------------')

let name = 'Abe';

const greetAbe = () => 'Hello, ' + name + '!';

name = 'Ben';

const greetBen = () => 'Hello, ' + name + '!';

console.log(greetAbe());
console.log(greetBen());
console.log('-------------------------------')

const orderedCount = function (text) {
  let ans = new Map();
  let raide = '';

  for (i = 0; text.length > i; i++) {
    let count = 0;
    for (index = 0; index < text.length; index++) {
      if (text[index] === text[i]) {
        count++;
      }
    }
    ans.set(text[i], count);

  }
  ans = [...new Set(ans)];
  return Array.from(ans);
}
console.log(orderedCount('aaasdasdasdwa'))
console.log(orderedCount('1234567899'))
console.log('-------------------------------')

function myLanguages(results) {
  let ans = [];
  let temp = Object.entries(results).sort(([, a], [, b]) => b - a);
  let temp1 = [];
  for (i = 0; i < temp.length; i++) {
    temp1 = temp[i];
    if (temp1[1] >= 60) {
      ans.push(temp1[0]);
    }
  }
  return ans;
}


console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }));

console.log('-------------------------------')

const liiiist = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 32, 13, 12, 3, 123, 12, 3, 123];


function didziausiasSkaiciusSarase(list) {
  if (Array.isArray(list) !== true) {
    return 'Pateikta netinkamo tipo reikšmė.';
  } else if (list.length === 0) {
    return 'Pateiktas sąrašas negali būti tuščias.';
  }
  return Math.max(...list);
}
console.log('>>>', didziausiasSkaiciusSarase(liiiist));
console.log('-------------------------------')
String.prototype.toAlternatingCase = function () {
  let ans = ''
  for (i = 0; i < this.length; i++)
    if (this[i].toUpperCase() === this[i]) {
      ans += this[i].toLowerCase();
    } else {
      ans += this[i].toUpperCase();
    }

  return ans;
}
console.log("aaaAAAA".toAlternatingCase());
console.log('-------------------------------')

String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
}

console.log("aaaAAAA".isUpperCase());
console.log("AAAA".isUpperCase());
console.log('-------------------------------')

function skaitmenuKiekisSkaiciuje(j) {
  if (typeof j !== 'number') {
    return 'Netinkamo tipo reiksme';
  } else {
    return j;
  }
}
console.log(skaitmenuKiekisSkaiciuje(5))
console.log('-------------------------------')

function countingValleys(s) {
  let count = 0;
  let level = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] === 'U' && level === -1) {
      level++;
      count++;
    } else if (s[i] === 'D') {
      level--;
    } else if (s[i] === 'U') {
      level++
    }
  }
  return count;
}
console.log(countingValleys('UFFDDFDUDFUFU'))
console.log('-------------------------------')

function halvingSum(n) {
  if (n < 1) return 0;
  console.log(n);
  return n + halvingSum(parseInt(n / 2));
}
console.log(halvingSum(26));

function asteriscIt(n) {
  let ans = '';
  let nn = n + '';
  if (typeof n === 'object') nn = n.join('')
  for (i = 0; i < nn.length; i++) {
    if (parseInt(nn[i]) % 2 === 0 && parseInt(nn[i + 1]) % 2 === 0) {
      ans += nn[i] + '*';
    } else {
      ans += nn[i];
    }
  }
  return ans;
}
console.log(asteriscIt(3513513554444))
console.log(asteriscIt([35, 13, 5, 13, 5, 5, 4, 444]))


function validBraces(braces) {
  if (braces.split('(').length !== braces.split(')').length || braces.split('[').length !== braces.split(']').length || braces.split('{').length !== braces.split('}').length) {
    return false;
  }
  if ([']', '}', ')'].includes(braces[0]) || ['[', '{', '('].includes(braces.slice(-1))) {
    return false;
  }
  for (i = 0; braces.length > i; i++) {
    if (braces[i] === '(' && [']', '}'].includes(braces[i + 1])) {
      return false
    }
    if (braces[i] === '[' && ['}', ')'].includes(braces[i + 1])) {
      return false
    }
    if (braces[i] === '{' && [']', ')'].includes(braces[i + 1])) {
      return false
    }
  }
  return true;
}
console.log(validBraces("]((({{{[[[}}}]]])))"))
console.log(validBraces("((({{{[[[}}}]]])))"))
console.log(validBraces("(((()))))))))"))
console.log(validBraces("(((()))))))))"))
console.log(validBraces(")("))
console.log(validBraces("[(])"))
console.log(validBraces("({})[({})]"))
console.log(validBraces("()"))
console.log(validBraces("()"))

function dominator(arr) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    count = 0;
    for (index = 0; index < arr.length; index++) {
      if (arr[i] === arr[index]) {
        count++;
      }
    }
    if (count > arr.length / 2) return arr[i];
  }

  return -1;
}

console.log(dominator([]));
console.log(dominator([1]));
console.log(dominator([1, 2,]));
console.log(dominator([1, 3, 3, 4, 4]));
console.log(dominator([1, 3, 3, 4, 4, 4, 4]));
console.log(dominator([11, 3313, 333, 4, 4, 4, 4, 11, 11, 11, 11, 11, 11]));



function dominator1(arr) {

  const map1 = new Map(Array.from(arr, x => [x, 0]));
  for (i = 0; i < arr.length; i++) {
    const temp = map1.get(arr[i]);
    map1.set(arr[i], temp + 1);
  }
  const mapSort1 = new Map([...map1.entries()].sort((a, b) => b[1] - a[1]));
  if (mapSort1.values().next().value > arr.length / 2) {
    return mapSort1.keys().next().value
  }
  return -1;
}
console.log(dominator1([]));
console.log(dominator1([1]));
console.log(dominator1([1, 2,]));
console.log(dominator1([1, 3, 3, 4, 4]));
console.log(dominator1([1, 3, 3, 4, 4, 4, 4]));
console.log(dominator1([5, 91, 3313, 333, 4, 4, 4, 4, 11, 11, 11, 11, 11, 11]));

// function dominator(arr) {
//   for (let i = 0, obj = {}; i < arr.length; i++) {
//     obj[arr[i]] = obj[arr[i]] + 1 || 1
//     if (obj[arr[i]] > arr.length / 2) return arr[i]
//   } return -1
// }

// function dominator(arr) {
//   arr.sort();
//   for (var i = 0, v = 0, c = 0; i < arr.length; i++) {
//     if (v == arr[i]) c++;
//     else {
//       v = arr[i];
//       c = 1;
//     }
//     if (c > arr.length / 2) return v;
//   }
//   return -1;
// }

// const dominator = arr => {
//   let count = {};
//   arr.forEach(el => {
//     count[el] ? count[el]++ : count[el] = 1;
//   })
//   for (let k in count) {
//     if (count[k] > arr.length / 2) return +k
//   }
//   return -1;
// }
function sideLen(x, y) {
  const c = Math.sqrt(y * y - x * x);
  const c2 = x + y;
  const c3 = y - x + 1;
  let nums = []
  if (c % 1 === 0) {
    nums = [c2, c3, c].sort(function (a, b) { return a - b });
  } else {
    nums = [c2, c3].sort(function (a, b) { return a - b });
  }
  const list = [];
  for (i = nums[0]; i < nums[nums.length - 1]; i++) {
    list.push(i);
  }
  if (Math.sqrt(x * x + y * y) % 1 === 0) {
    list.splice(list.indexOf(Math.sqrt(x * x + y * y)), 1);
    return list;
  } if (c % 1 === 0) {
    list.splice(list.indexOf(c), 1);
    return list;
  }
  return list;
}
console.log(sideLen(3, 4))
console.log(sideLen(4, 6))
console.log(sideLen(5, 12))
console.log(sideLen(8, 10))

function letterCheck(arr) {
  const letters = arr[1];
  let list = [];
  for (i = 0; i < arr[0].length; i++) {
    list.push(arr[0][i].toLowerCase())
  }
  for (i = 0; letters.length > i; i++) {
    if (!list.includes(letters[i].toLowerCase())) {
      return false;
    }
  }
  return true;
}

console.log(letterCheck(['AAA', 'aaa']));
console.log(letterCheck(['aaa', 'aaa']));
console.log(letterCheck(['AAA', 'aaav']));

function letterCount(s) {
  const map = new Map(Array.from(s, x => [x, 0]));
  for (i = 0; i < s.length; i++) {
    const temp = map.get(s[i]);
    map.set(s[i], temp + 1);
  }
  return Object.fromEntries(map);
}
console.log(letterCount("aaaaaaab"))
console.log(letterCount("aaaaaaabaserfgehjkuiko"))

function reduceByRules(numbers, rules) {
  let index = 0;
  let answer = numbers[0];

  for (i = 0; numbers.length - 1 > i; i++) {
    if (index === rules.length) {
      index = 0;
    }
    console.log('index', index, 'ans', answer)
    answer = rules[index++](answer, numbers[i + 1]);
  }
  return answer;
}


let rules = [(a, b) => a + b, (a, b) => a - b];
console.log(reduceByRules([2, 2, 3, 4], rules))
console.log(reduceByRules([1, 2.5, 3.7, 4.9], rules))

const searchArray = function (arrayToSearch, query) {
  if (query.length !== 2) {
    throw new Error('error');
  }
  if (!Array.isArray(query)) {
    throw new Error('error');
  }
  for (i = 0; i < arrayToSearch.length; i++) {
    if (!Array.isArray(arrayToSearch[i])) {
      throw new Error('error');;
    }
    if (arrayToSearch[i].length !== 2) {
      throw new Error('error');;
    }
    if (arrayToSearch[i].join() === query.join()) {
      return i;
    }
  }
  return -1;
}
let bigArray = [[2, 3], [7, 2], [9, 20], [1, 2], [7, 2], [45, 4], [7, 87], [4, 5], [2, 7], [6, 32]];
let searchFor = [9, 20];
console.log(searchArray(bigArray, searchFor), 2);
searchFor = [1, 12];
console.log(searchArray(bigArray, searchFor), -1);


function findSummands(n) {
  const nnn = n * n * n;
  let list = [];
  let ans = [];
  let first = 1;
  let sum = 0;
  for (i = 1; list.length < n; i += 2) {
    list.push(i);
    sum += i
  }
  while (sum < nnn) {
    sum += n * 2
    first += 2;
  }
  if (sum === nnn) {
    for (i = first; ans.length < n; i += 2) {
      ans.push(i)
    }
    return ans;
  }
}

console.log(findSummands(1));
console.log(findSummands(2));
console.log(findSummands(3));

function rgb(r, g, b) {
  r = verify(r);
  b = verify(b);
  g = verify(g);
  return one(r) + one(g) + one(b);
}

function one(a) {
  const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
  let one = 0;
  let two = 0;
  for (i = 0; i < 16; i++) {

    for (j = 0; j < 16; j++) {
      if (a / 16 === i + j / 16) {
        one = i;
        two = j;
        return hex[one] + hex[two];
      }
    }
  }
}
function verify(a) {
  if (a > 255) a = 255;
  if (a < 0) a = 0;
  return a.toFixed(0)
}

console.log(rgb(0, 0, 0), '--- 000000');
console.log(rgb(0, 0, -20), '--- 000000');
console.log(rgb(300, 255, 255), '--- FFFFFF');
console.log(rgb(173, 255, 47), '--- ADFF2F');


function generateHashtag(str) {
  let first = str.split(' ');
  let list = [];
  for (i = 0; i < first.length; i++) {
    list.push(((first[i] + '').trim().slice(0, 1).toUpperCase() + (first[i] + '').slice(1)))
  }
  const ans = "#" + list.join().replaceAll(',', '')
  if (ans.length === 1 || ans.length > 140) {
    return false;
  }
  return ans;
}

console.log(generateHashtag(''))
console.log(generateHashtag('abswr   asdasd asda  '))
console.log(generateHashtag('      asdioj    '))
console.log(generateHashtag('   '))

function zeros(n) {
  let number = 5;
  let count = 0;
  while (number < n) {
    count += parseInt(n / number);
    number *= 5;
  }
  return count;
}

console.log(zeros(9999999999999999999999999));
// function zeros(n) {
//     let nnn = BigInt(1);
//     let count = 0;
//     for (i = 1; i <= n; i++) {
//         nnn = BigInt(i) * nnn;
//     }
//     let string = nnn.toString();
//     if (string.length <= 1) {
//         return 0;
//     }
//     for (i = 0; i < string.length; i++) {
//         if (string[string.length - 1 - i] !== '0') {
//             break;
//         } else {
//             count++;
//         }
//     }
//     return count;
// }


function incrementString(string) {
  if (string[string.length - 1] != parseFloat(string[string.length - 1])) {
    return string + 1;
  }
  let nums = '';
  for (i = 0; i < string.length; i++) {
    if (string[string.length - 1 - i] == parseFloat(string[string.length - 1 - i])) {
      nums = string[string.length - 1 - i] + nums;
    } else {
      break
    }
  }
  let nines = true;
  const numsInt = parseFloat(nums)
  for (i = 0; (numsInt + '').length > i; i++) {
    if ((numsInt + '')[i] !== "9") {
      nines = false;
    }
  }
  if (nines && nums[0] === "0") {

    string = string.slice(0, -((numsInt + '').length + 1))

  } else {
    string = string.slice(0, -(numsInt + '').length)
  }
  console.log(".........", string);
  return string + (parseFloat(nums) + 1);
}

console.log(incrementString('foobar00999'))
console.log(incrementString('fo99obar99'))
console.log(incrementString('sdfawad999099'))

