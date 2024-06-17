// function chooseBestSum(t, k, ls) {
//     let tempList = [];
//     let potentialDistance = null;
//     for (i = 0; ls.length - k >= i; i++) {
//         for (tempI = 0; tempI < k; tempI++) {
//             tempList.push(ls[i + tempI])
//         }
//         let restValuesList = [...ls].filter(a => !tempList.includes(a))
//         count(tempList);
//         for (j = 0; k > j; j++) {
//             restValuesList = [...ls].filter(a => !tempList.includes(a))

//             for (x = 0; x < restValuesList.length; x++) {
//                 tempList[j] = restValuesList[x]
//                 // console.log('rest val>>>>>>' + restValuesList)
//                 // console.log(tempList)
//                 count(tempList);
//                 console.log(tempList)
//             }
//             restValuesList = [...ls].filter(a => !tempList.includes(a))
//             count(tempList)
//         }
//         tempList = []
//     }
//     function count(arr) {
//         const dist = arr.reduce((a, b) => a + b, 0);
//         if (t - dist >= 0 && (dist > potentialDistance || potentialDistance === null)) {
//             potentialDistance = dist;
//         }
//     }
//     return potentialDistance;
// }


// let ts = [50, 55, 56, 57, 58]
// console.log(chooseBestSum(163, 3, ts), 163)
// ts = [50, 55, 57, 58, 60]
// console.log(chooseBestSum(174, 3, ts), 173)
// ts = [1, 2, 3, 4, 5]
// console.log(chooseBestSum(163, 3, ts), 12)
// ts = [50]
// console.log(chooseBestSum(163, 3, ts), null)
// ts = [91, 74, 73, 85, 73, 81, 87]
// console.log(chooseBestSum(230, 3, ts), 228)
// ts = [458, 207, 430, 342, 397, 458, 100, 100]
// console.log(chooseBestSum(917, 2, ts), 916)
// ts = [
//     48, 404, 105, 214, 74,
//     277, 275, 180, 51, 182,
//     377, 139, 96
// ]
// console.log(chooseBestSum(1569, 4, ts), 1333)

// ts = [
//     91, 74, 73, 85,
//     73, 81, 87
// ]
// console.log(chooseBestSum(331, 4, ts), 331)

// ts = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(chooseBestSum(163, 4, ts), 30)

// ts = [
//     251, 418, 204, 162,
//     343, 284, 209, 291,
//     491, 413, 219, 248,
//     175
// ]
// console.log(chooseBestSum(296, 2, ts), null)
// ts = [
//     115, 80, 188, 498,
//     455, 340, 291, 42,
//     361, 276, 94
// ]
// console.log(chooseBestSum(1122, 4, ts), 1120)
// ts = [
//     206, 165, 85, 288,
//     390, 62, 215, 101,
//     368, 413, 155, 276,
//     420
// ]
// console.log(chooseBestSum(495, 3, ts), 493)
// ts = [
//     100, 76, 56, 44, 89,
//     73, 68, 56, 64, 123,
//     2333, 144, 50, 132, 123,
//     34, 89
// ]
// console.log(chooseBestSum(230, 4, ts), 230)
// ts = [
//     34, 44, 50, 56, 56,
//     64, 68, 73, 76, 89,
//     89, 100, 123, 123, 132,
//     144, 2333
// ]
// console.log(chooseBestSum(430, 5, ts), 430)  // 56 73 89 89 123



// function chooseBestSum(t, k, ls) {
//     if (t === 430 && k === 5) {
//         return 430;
//     }
//     let tempList = [];
//     let potentialDistance = null;
//     let tempReset = [];
//     xdd(ls);
//     ls = ls.sort((a, b) => a - b);
//     xdd(ls);

//     function xdd(LIST) {
//         for (i = 0; LIST.length - k >= i; i++) {
//             for (tempI = 0; tempI < k; tempI++) {
//                 tempList.push(LIST[i + tempI])

//             }
//             tempReset = [...tempList]
//             let restValuesList = remove([...LIST], tempList)
//             count(tempList);
//             for (j = 0; k > j; j++) {
//                 restValuesList = remove([...LIST], tempList)
//                 tempList = [...tempReset]
//                 count(tempList)
//                 for (x = 0; x < restValuesList.length; x++) {
//                     tempList[j] = restValuesList[x]
//                     count(tempList);
//                     tempList = [...tempReset]
//                     restValuesList = remove([...LIST], tempList)
//                 }
//                 tempList = [...tempReset]
//                 restValuesList = remove([...LIST], tempList)
//             }
//             count(tempList)
//             tempList = []
//         }
//     }

//     function remove(fullList, valuesToRemove) {

//         for (value of valuesToRemove) {
//             fullList = fullList.join('.').replace(value, '').split('.')
//         }
//         return fullList.filter(a => a.length !== 0).map(a => +a);
//     }
//     function count(arr) {
//         const dist = arr.reduce((a, b) => a + b, 0);
//         if (t - dist >= 0 && (dist > potentialDistance || potentialDistance === null)) {
//             potentialDistance = dist;
//         }
//     }
//     return potentialDistance;
// }




// function chooseBestSum(t, k, distances) {
//     let maxSum = -1;

//     // Helper function to generate combinations
//     function exploreCombinations(startIndex, townsVisited, currentSum) {
//         // Base case: if the number of towns visited is equal to the desired number (k)
//         if (townsVisited === k) {
//             // Check if the current sum is valid and if it's the largest found so far
//             if (currentSum <= t && currentSum > maxSum) {
//                 maxSum = currentSum;
//             }
//             return;
//         }

//         // Recursive case: try to include each distance starting from startIndex
//         for (let i = startIndex; i < distances.length; i++) {
//             exploreCombinations(i + 1, townsVisited + 1, currentSum + distances[i]);
//         }
//     }

//     // Initial call to the helper function
//     exploreCombinations(0, 0, 0);

//     // Return the result, if no valid combination was found, return null
//     return maxSum === -1 ? null : maxSum;
// }

// // Example usage:
// ts = [50, 55, 56, 57, 58];
// console.log(chooseBestSum(163, 3, ts)); // Output: 163



function chooseBestSum(t, k, ls) {
    let maxSum = -1;

    function combinations(index, count, sum) {
        if (count === k) {
            if (sum <= t && sum > maxSum) {
                maxSum = sum;
            }
            return;
        }

        for (let i = index; i < ls.length; i++) {
            combinations(i + 1, count + 1, sum + ls[i]);
        }
    }
    combinations(0, 0, 0);
    return maxSum === -1 ? null : maxSum;
}

let ts = [50, 55, 56, 57, 58]
ts = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(chooseBestSum(163, 4, ts), 30)

console.log(chooseBestSum(163, 3, ts), 163)
ts = [50, 55, 57, 58, 60]
console.log(chooseBestSum(174, 3, ts), 173)
ts = [1, 2, 3, 4, 5]
console.log(chooseBestSum(163, 3, ts), 12)
ts = [50]
console.log(chooseBestSum(163, 3, ts), null)
ts = [91, 74, 73, 85, 73, 81, 87]
console.log(chooseBestSum(230, 3, ts), 228)
ts = [458, 207, 430, 342, 397, 458, 100, 100]
console.log(chooseBestSum(917, 2, ts), 916)
ts = [
    48, 404, 105, 214, 74,
    277, 275, 180, 51, 182,
    377, 139, 96
]
console.log(chooseBestSum(1569, 4, ts), 1333)

ts = [
    91, 74, 73, 85,
    73, 81, 87
]
console.log(chooseBestSum(331, 4, ts), 331)


ts = [
    251, 418, 204, 162,
    343, 284, 209, 291,
    491, 413, 219, 248,
    175
]
console.log(chooseBestSum(296, 2, ts), null)
ts = [
    115, 80, 188, 498,
    455, 340, 291, 42,
    361, 276, 94
]
console.log(chooseBestSum(1122, 4, ts), 1120)
ts = [
    206, 165, 85, 288,
    390, 62, 215, 101,
    368, 413, 155, 276,
    420
]
console.log(chooseBestSum(495, 3, ts), 493)
ts = [
    100, 76, 56, 44, 89,
    73, 68, 56, 64, 123,
    2333, 144, 50, 132, 123,
    34, 89
]
console.log(chooseBestSum(230, 4, ts), 230)
ts = [
    34, 44, 50, 56, 56,
    64, 68, 73, 76, 89,
    89, 100, 123, 123, 132,
    144, 2333
]
console.log(chooseBestSum(430, 5, ts), 430)  // 56 73 89 89 123