https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa

function chooseBestSum(t, k, ls) {
    let tempList = [];
    let tempSum = 0;
    if (k > ls.length) {
        return null;
    }
    for (i = 0; i < ls.length; i++) {
        tempList = [];
        for (index = 0; index < k; index++) {
            tempList.push(ls[index])
            console.log(tempList)
        }

        return (count(tempList));
    }
    function count(list) {
        let sum = 0;
        for (i = 0; i < list.length; i++) {
            sum += list[i];
        }
        return sum;
    }
    return 'a'
}

let ts = [50, 55, 56, 57, 58]
console.log(chooseBestSum(163, 3, ts), 163)
ts = [50]
console.log(chooseBestSum(163, 3, ts), null)
ts = [91, 74, 73, 85, 73, 81, 87]
console.log(chooseBestSum(230, 3, ts), 228)


https://www.codewars.com/kata/56bdd0aec5dc03d7780010a5/train/javascript

// function nextHigher(n) {
//     const countOne = (string) => string.split('').filter((l) => l === '1').length;
//     const nOneCount = countOne(n.toString(2));
//     while (true) {
//         n++;
//         const tempOne = countOne(n.toString(2))
//         if (nOneCount === tempOne) {
//             break;
//         }
//     }
//     return n;
// }

console.log(nextHigher(128), 256);
console.log(nextHigher(1), 2);
console.log(nextHigher(1022), 1279);
console.log(nextHigher(127), 191);
console.log(nextHigher(1253343), 1253359);
console.log(nextHigher(201326592));
console.log(nextHigher(822083584));
console.log(nextHigher(1006632960), 1073741831);
console.log(nextHigher(201326592984918));


function nextHigher(n) {
    let binary = n.toString(2);
    // console.log(binary)
    if (!binary.includes('0')) {
        return parseInt('10' + binary.slice(1), 2)
    }
    for (i = binary.length; i > 0; i--) {
        if (binary[i] === '0' && binary[i + 1] === '1') {
            binary = binary.split('');
            binary[i] = '1';
            binary[i + 1] = '0';
            binary = binary.join('');
            return parseInt(binary, 2);
        }

    }
    let first0 = null;
    for (i = binary.length; i > 0; i--) {
        binary = binary.split('');
        if (binary[i] === 0) {
            first0 = i;
        }


        binary = binary.join('');
    }

}



// console.log(parseInt('111', 2));

// let test = 'bcaaaaaaaa';
// test = test.split('');
// test[4] = 'b';
// test = test.join('');
// console.log(test);
// console.log(test.slice(1));
