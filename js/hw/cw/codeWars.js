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

function dirReduc(arr) {
  let string = arr.join(' ');
  if (string.includes("NORTH SOUTH") || string.includes("SOUTH NORTH") ||
    string.includes("WEST EAST") || string.includes("EAST WEST")) {
    string = string.replaceAll("NORTH SOUTH", "")
      .replaceAll("SOUTH NORTH", "")
      .replaceAll("WEST EAST", "")
      .replaceAll("EAST WEST", "");
  } else {
    return string.split(' ').filter(Boolean);
  }
  return dirReduc(string.split(' ').filter(Boolean));
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
console.log()
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log()
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
console.log(dirReduc(["NORTH", "NORTH", "NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));

function longestConsec(strarr, k) {
  let answer = '';
  let temp = '';
  if (strarr.length > k) {
    for (i = 0; i < strarr.length - k + 1; i++) {
      for (index = 0; index < k; index++) {
        temp += strarr[i + index]
      }
      if (temp.length > answer.length) {
        answer = temp;
      }
      temp = '';
    }
  }
  return answer;
}
console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2), '-->', "folingtrashy")
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), '-->', "abigailtheta")

// xdd
// let ans = 0;
// function postfixEvaluator(string) {
//   let list = string.split(' ');
//   if (list.length === 1) {
//     return parseInt(list.join(' '))
//   }
//   if (!list.includes('+') && !list.includes('/') && !list.includes('*') && !list.includes('-')) {
//     return ans;
//   }
//   for (i = 0; i < list.length; i++) {
//     if (list[i] === '+') {
//       ans = Math.round(list[i - 2]) + Math.round(list[i - 1]);
//       const replace = list[i - 2] + ' ' + list[i - 1] + ' ' + '+';
//       string = list.join(' ').replace(replace, ans);
//       return postfixEvaluator(string);
//     }
//     if (list[i] === '*') {
//       ans = Math.round(list[i - 1]) * Math.round(list[i - 2]);
//       const replace = list[i - 2] + ' ' + list[i - 1] + ' ' + '*';
//       string = list.filter(Boolean).join(' ').replace(replace, ans)
//       return postfixEvaluator(string);
//     }
//     if (list[i] === '-') {
//       ans = Math.round(list[i - 2]) - Math.round(list[i - 1]);
//       const replace = list[i - 2] + ' ' + list[i - 1] + ' ' + '-';
//       string = list.filter(Boolean).join(' ').replace(replace, ans)
//       return postfixEvaluator(string);
//     }
//     if (list[i] === '/') {
//       ans = Math.round(list[i - 2]) / Math.round(list[i - 1]);
//       const replace = list[i - 2] + ' ' + list[i - 1] + ' ' + '/';
//       string = list.filter(Boolean).join(' ').replace(replace, ans)
//       return postfixEvaluator(string);
//     }
//   }
// }


// console.log(postfixEvaluator("2 3 +"), 5);
// console.log(postfixEvaluator("20 40 + 60 *"), 3600);
// console.log(postfixEvaluator('20 40 60 + *'), 2000);
// console.log(postfixEvaluator('20 40 60 * *'));
// console.log(postfixEvaluator('20 40 - 60 -'));
// console.log(postfixEvaluator('2 3 9 4 / + *'));


function spinWords(string) {
  let ans = '';
  const list = string.split(' ')
  for (i = 0; i < list.length; i++) {
    if (list[i].length >= 5) {
      ans += (list[i].split('').reverse().join('')) + ' ';
    } else {
      ans += (list[i]) + ' ';
    }
  }
  return ans.trim();
}

console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");


function findOdd(A) {
  let count = 0;
  let current = null;
  A = A.sort()
  while (A.length !== 0) {
    current = A[0];
    count++;
    A.shift();
    if (!A.includes(current) && count % 2 !== 0) {
      return current;
    } else if (!A.includes(current)) {
      count = 0;
    }
  }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]), 5);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
console.log(findOdd([10]), 10);
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);

function digitalRoot(n) {
  let ans = 0;
  let temp = 0;
  let list = (n + '').split("").map(Number)
  while (list.length > 1) {
    for (i = 0; i < list.length; i++) {
      temp += list[i];
    }
    list = (temp + '').split("").map(Number)
    ans = temp;
    temp = 0;
  }
  return ans;
}

console.log(digitalRoot(16), 7)
console.log(digitalRoot(456), 6)


function reverseWords(str) {
  const list = str.split(' ');
  let ans = [];
  for (i = 0; i < list.length; i++) {
    ans.push(list[i].split('').reverse().join(''));
  }
  return ans.join(' ')
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');

function bouncingBall(h, bounce, window) {
  if (h < 0 || bounce >= 1 || bounce < 0 || h < window) {
    return -1;
  }
  count = 1;
  h = h * bounce;
  while (h > window) {
    h = h * bounce;
    count += 2;
  }
  return count;
}

console.log(bouncingBall(3.0, 0.66, 1.5), 3)
console.log(bouncingBall(3.0, 1.0, 1.5), -1);
console.log(bouncingBall(30.0, 0.66, 1.5), 15);


function findOutlier(integers) {
  let evenCount = 0;
  let oddCount = 0;
  let odd = null;
  let even = null;
  for (i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenCount++;
      even = integers[i];
    } else {
      oddCount++;
      odd = integers[i];
    }
  }
  return evenCount === 1 ? even : odd;
}
function partsSums(ls) {
  const length = ls.length;
  let ans = [];
  let num = 0;
  for (i = 0; i < length; i++) {
    num += ls[i];
  }
  for (i = 0; i < length; i++) {
    ans.push(num)
    num -= ls[i]
  }
  ans.push(0)
  return ans;
}

console.log(partsSums([1, 2, 3, 4, 5, 6, 7, 8, 9]))

function atomicNumber(num) {
  let sum = 0;
  let ans = [];
  let index = 1;
  if (num <= 2) { return [num] }
  while (sum <= num) {
    if ((2 * (index ** 2)) + sum < num) {
      ans.push(2 * (index ** 2));
      sum += 2 * (index ** 2);
      index++
    } else {
      ans.push(num - sum)
      sum += num + sum;
    }
  }

  return ans;
}
console.log(atomicNumber(1), [1], 'atomicNumber(10)')
console.log(atomicNumber(10), [2, 8], 'atomicNumber(10)')
console.log(atomicNumber(11), [2, 8, 1], 'atomicNumber(11)')
console.log(atomicNumber(22), [2, 8, 12], 'atomicNumber(22)')
console.log(atomicNumber(23), [2, 8, 13], 'atomicNumber(23)')
console.log(atomicNumber(47), [2, 8, 18, 19], 'atomicNumber(47)')
console.log(atomicNumber(50), [2, 8, 18, 22], 'atomicNumber(50)')
console.log(atomicNumber(52), [2, 8, 18, 24], 'atomicNumber(52)')
console.log(atomicNumber(60), [2, 8, 18, 32], 'atomicNumber(60)')
console.log(atomicNumber(61), [2, 8, 18, 32, 1], 'atomicNumber(61)')

function getBestWord(points, words) {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let length = 0;
  let maxPoints = 0;
  let ans = 0;
  for (i = 0; i < words.length; i++) {
    let tempPoints = 0;
    const currentWord = words[i];
    for (j = 0; j < currentWord.length; j++) {
      tempPoints += points[letters.indexOf(currentWord[j])];
      if (tempPoints > maxPoints) {
        maxPoints = tempPoints;
        ans = i;
        length = currentWord.length
      }
      if (tempPoints >= maxPoints && length > currentWord.length) {
        maxPoints = tempPoints;
        ans = i;
        length = currentWord.length
      }

    }
    tempPoints = 0;
  }
  return ans;
}
var points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10, 10];
var simpleWords = ["WHO", "IS", "THE", "BEST", "OF", "US"];
var rndmWords = ["NOQ", "TXAY", "S", "OM", "ESFT", "CJUKQ", "QL", "QO", "ASTK", "Y"];
var firstBestWord = ["JGPCWVWFW", "JXHNKBJJG"];

console.log(getBestWord(points, simpleWords), 0);
console.log(getBestWord(points, rndmWords), 5);
console.log(getBestWord(points, firstBestWord), 0);


function nameInStr(str, name) {
  str = str.toLowerCase();
  name = name.toLowerCase();
  for (i = 0; name.length > i; i++) {
    if (!str.includes(name[i])) {
      return false;
    }
    for (j = 0; j < str.length; j++) {
      if (str[j] === name[i]) {
        console.log(name, name[i], str)
        str = str.slice(j + 1);
        break;
      }
    }
  }
  return true;
}


console.log(nameInStr('Across the rivers', 'chris'), true)
console.log(nameInStr('Next to a lake', 'chris'), false)
console.log(nameInStr('Under a sea', 'chris'), false)
console.log(nameInStr('A crew that boards the ship', 'chris'), false)
console.log(nameInStr('A live son', 'Allison'), false)


function hasArithmProg(arr) {
  let start = Infinity;
  if (arr.length < 3) {
    return undefined;
  }
  for (i = 0; i < arr.length - 2; i++) {
    if (arr[i + 1] - arr[i] === arr[i + 2] - arr[i + 1]) {
      if (i < start) {
        start = i;
      }
    }
  }
  if (start === 0) {
    return true;
  } else if (start === Infinity) {
    return false;
  } else {
    return start;
  }
}

console.log(hasArithmProg([9, 5, 1]), true);
console.log(hasArithmProg([9, 1, 2, 14, 46]), false);
console.log(hasArithmProg([90, 2, 4, 6, 8, 14]), 1);
console.log(hasArithmProg([2, 10, 4, 6]), false)
console.log(hasArithmProg([9, 1]), undefined);

function isValidChess960(pieces) {
  if (pieces.indexOf("B") % 2 === 0 && pieces.lastIndexOf("B") % 2 === 0 ||
    pieces.indexOf("B") % 2 === 1 && pieces.lastIndexOf("B") % 2 === 1) {
    return false;
  }
  if (pieces.indexOf('K') > pieces.indexOf('R') &&
    pieces.indexOf('K') < pieces.lastIndexOf('R')) {
    return true;
  }
  return false;
}

console.log(isValidChess960("RNBQKBNR"));
console.log(isValidChess960("QNNBBRKR"));
console.log(isValidChess960("QRNNBBRK"));
console.log(isValidChess960("QNBNBRKR"));

function bigToSmall(arr) {
  return [].concat(...arr).sort((a, b) => b - a).join('>');
}
console.log(bigToSmall([[1, 2], [3, 4], [5, 6]]), "6>5>4>3>2>1");
console.log(bigToSmall([[1, 3, 5], [2, 4, 6]]), "6>5>4>3>2>1");
console.log(bigToSmall([[1, 1], [1], [1, 1]]), "1>1>1>1>1");

// function person(firstName, lastName, age, gender, employed, occupation, married) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
//     gender: gender,
//     employed: employed,
//     occupation: occupation,
//     married: married,
//     sayName() {
//       return firstName + ' ' + lastName
//     },
//     introduce() {
//       return `Hello, my name is ${firstName} ${lastName}.  I am ${age} years old.  I am a ${gender}.`
//     }
//   }
// }
// describe("Your factory function", () => {
//   it("should instantiate an object properly with the given parameters", () => {
//     var john = person("John", "Doe", 18, "male", false, null, true);
//     Test.assertEquals(john.firstName, "John");
//     Test.assertEquals(john.lastName, "Doe");
//     Test.assertEquals(john.age, 18);
//     Test.assertEquals(john.gender, "male");
//     Test.assertEquals(john.employed, false);
//     Test.assertEquals(john.occupation, null);
//     Test.assertEquals(john.married, true);
//     Test.assertEquals(john.sayName(), "John Doe");
//     Test.assertEquals(john.introduce(), "Hello, my name is John Doe.  I am 18 years old.  I am a male.");
//     var cathy = person("Cathy", "Destexhe", 16, "female", true, "Designer", false);
//     Test.assertEquals(cathy.firstName, "Cathy");
//     Test.assertEquals(cathy.lastName, "Destexhe");
//     Test.assertEquals(cathy.age, 16);
//     Test.assertEquals(cathy.gender, "female");
//     Test.assertEquals(cathy.employed, true);
//     Test.assertEquals(cathy.occupation, "Designer");
//     Test.assertEquals(cathy.married, false);
//     Test.assertEquals(cathy.sayName(), "Cathy Destexhe");
//     Test.assertEquals(cathy.introduce(), "Hello, my name is Cathy Destexhe.  I am 16 years old.  I am a female.");
//   });
// });


// function constructionWorker(firstName, lastName, age, gender, married, boss) {
//   const obj = person(firstName, lastName, age, gender, boss)
//   obj.employed = true;
//   obj.boss = boss;
//   obj.married = married;
//   obj.occupation = "construction worker";
//   obj.sayBossName = a => `My boss is called ${boss} and is a very nice person!`
//   return obj
// }

//     var alfie = constructionWorker("Alfie", "Ching", 13, "Male", false, "Ethan");
//     Test.assertEquals(alfie.firstName, "Alfie");
//     Test.assertEquals(alfie.lastName, "Ching");
//     Test.assertEquals(alfie.age, 13);
//     Test.assertEquals(alfie.gender, "Male");
//     Test.assertEquals(alfie.employed, true);
//     Test.assertEquals(alfie.occupation, "construction worker");
//     Test.assertEquals(alfie.married, false);
//     Test.assertEquals(alfie.boss, "Ethan");
//     Test.assertEquals(alfie.sayName(), "Alfie Ching");
//     Test.assertEquals(alfie.introduce(), "Hello, my name is Alfie Ching.  I am 13 years old.  I am a Male.");
//     Test.assertEquals(alfie.sayBossName(), "My boss is called Ethan and is a very nice person!");


function deal(n) {
  let deck = [...DECK];
  let state = (n * 214013 + 2531011) % 2 ** 31
  const finalDeck = [];
  while (deck.length > 1) {
    let randMod = Number.parseInt(state / 2 ** 16) % deck.length;
    let randCard = deck[randMod]
    finalDeck.push(randCard);
    deck = deck.join('.').replace(randCard, deck[deck.length - 1]).slice(0, -3).split('.')
    state = (state * 214013 + 2531011) % 2 ** 31;

  }
  finalDeck.push(deck[0])
  return finalDeck;

}
// function arrange(strng) {
//   const list = strng.split(' ');
//   let index = 0;
//   let placeHolder = '';
//   repeat(list);
//   function repeat(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (index % 2 === 0 && arr[i].length > arr[i + 1].length) {
//         placeHolder = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = placeHolder;
//         index = 0;
//         return repeat(arr)
//       }
//       if (index % 2 === 1 && arr[i].length < arr[i + 1].length) {
//         placeHolder = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = placeHolder;
//         index = 0;
//         return repeat(arr);
//       }
//       index++
//     }
//     return list;
//   }

//   return list.map((a, b) => b % 2 === 0 ? a.toLowerCase() : a.toUpperCase()).join(' ');
// }

// function arrange(strng) {
//   const list = strng.split(' ');
//   let placeHolder = '';
//   repeat(list);
//   function repeat(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       if ((i % 2 === 0 && arr[i].length > arr[i + 1].length) ||
//         (i % 2 === 1 && arr[i].length < arr[i + 1].length)) {
//         placeHolder = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = placeHolder;
//         return repeat(arr)
//       }
//     }
//     return list;
//   }

//   return list.map((a, b) => b % 2 === 0 ? a.toLowerCase() : a.toUpperCase()).join(' ');
// }

function arrange(strng) {
  const list = strng.split(' ');
  let placeHolder = '';
  for (let i = 0; i < list.length - 1; i++) {
    if ((i % 2 === 0 && list[i].length > list[i + 1].length) ||
      (i % 2 === 1 && list[i].length < list[i + 1].length)) {
      placeHolder = list[i];
      list[i] = list[i + 1];
      list[i + 1] = placeHolder;
    }
  }
  return list.map((a, b) => b % 2 === 0 ? a.toLowerCase() : a.toUpperCase()).join(' ');
}

console.log(arrange("who hit retaining The That a we taken"), "who RETAINING hit THAT a THE we TAKEN"); // 3
console.log(arrange("on I came up were so grandmothers"), "i CAME on WERE up GRANDMOTHERS so"); // 4
console.log(arrange("way the my wall them him"), "way THE my WALL him THEM"); // 1
console.log(arrange("turn know great-aunts aunt look A to back"), "turn GREAT-AUNTS know AUNT a LOOK to BACK"); // 2

Array.prototype.sameStructureAs = function (other) {
  let isSame = true;
  if (Array.isArray(this) !== Array.isArray(other) || this.length !== other.length) {
    return (false)
  }
  function checkIfArray(arrThis, arrOther) {
    for (let i = 0; i < arrThis.length; i++) {
      if (Array.isArray(arrThis[i]) || Array.isArray(arrOther[i])) {
        checkIfSame(arrThis[i], arrOther[i])
      }
    }
    return;
  }
  function checkIfSame(arrThis, arrOther) {
    if (Array.isArray(arrThis) !== Array.isArray(arrOther) || arrThis.length !== arrOther.length) {
      isSame = false;
      return;
    }
    checkIfArray(arrThis, arrOther)
    return;
  }
  checkIfArray(this, other)
  return isSame
};

console.log([1, 1, 1].sameStructureAs([2, 2, 2]));
console.log([1, [1, 1]].sameStructureAs([2, [2, 2]]));
console.log([[[], []]].sameStructureAs([[[], []]]));
console.log([1, [[[1]]]].sameStructureAs([2, [[[2]]]]));
console.log([1, '[', ']'].sameStructureAs(['[', ']', 1]));

console.log([1, [1, 1]].sameStructureAs([2, [2]]));
console.log([1, [1, 1]].sameStructureAs([[2, 2], 2]));
console.log([[[], []]].sameStructureAs([[1, 1]]));
console.log([].sameStructureAs(1));
console.log([].sameStructureAs({}));
console.log([1, 2].sameStructureAs([[3], 3]));

function sortMe(arr) {
  const letters = [...arr].map(a => Number.isInteger(a) ? (a + '')[(a + '').length - 1] : a[a.length - 1]).sort()
  const ans = [];
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (letters[i] === (arr[j] + '')[(arr[j] + '').length - 1]) {
        ans.push(arr[j]);
        arr.splice(arr.indexOf(arr[j]), 1)
        break;
      }
    }
  }
  return ans;
}

console.log(sortMe(["asdf", 14, "13", "asdf"]), ["13", 14, "asdf", "asdf"]);
console.log(sortMe(["xxxf", "aaaf", "kf", "f", "ooooof"]), ["xxxf", "aaaf", "kf", "f", "ooooof"]);
console.log(sortMe(["xdxf", "xcxf", "xbxf", "xaxf"]), ["xdxf", "xcxf", "xbxf", "xaxf"]);
console.log(sortMe(["xdxf", "xcxa", "xbxf", "xaxf"]), ["xcxa", "xdxf", "xbxf", "xaxf"]);




