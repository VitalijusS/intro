// function find(seq) {
//     let interval = null;
//     seq = seq.sort((a, b) => a - b)
//     interval = seq[1] - seq[0];
//     if (seq[seq.length - 1] - seq[seq.length - 2] < interval) {
//         interval = seq[seq.length - 1] - seq[seq.length - 2]
//     }
//     for (i = 0; seq.length - 1 > i; i++) {
//         if ((seq[i]) + interval !== seq[i + 1]) {
//             return seq[i] + interval;
//         }
//     }
//     return 0;
// }

console.log(find([3, 9, 1, 11, 13, 5, 15]), 7)
console.log(find([5, -1, 0, 3, 4, -3, 2, -2, 6]), 1)
console.log(find([2, -2, 8, -8, 4, -4, 6, -6]), 0)
console.log(find([-1, -4, -3, -5, -6, -7, -8, -9]), -2)
console.log(find([-1, -4, -3, -5, -6, -7, -8, -9, -2, -11, 0]), -10)
console.log(find([5, 10, 15, 20, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 25)

// function find(seq) {
//     let min = seq[0];
//     let max = seq[0];
//     for (i = 0; seq.length > i; i++) {
//         if (seq[i] > max) {
//             max = seq[i]
//         }
//         if (seq[i] < min) {
//             min = seq[i]
//         }
//     }
//     let interval = Math.floor((max - min) / seq.length);
//     for (i = min; i < max; i += interval) {
//         if (!seq.includes(i)) {
//             return i;
//         }
//     }
//     return null;
// }


// const findMissing = function (list) {
//     let interval = null;
//     list = list.sort((a, b) => a - b)
//     interval = list[1] - list[0];
//     if (list[list.length - 1] - list[list.length - 2] < interval) {
//         interval = list[list.length - 1] - list[list.length - 2]
//     }
//     for (i = 0; list.length - 1 > i; i++) {
//         if ((list[i]) + interval !== list[i + 1]) {
//             return list[i] + interval;
//         }
//     }
//     return 0;
// }

// console.log(findMissing([3, 9, 1, 11, 13, 5]), 7)
// console.log(findMissing([5, -1, 0, 3, 4, -3, 2, -2]), 1)
// console.log(findMissing([2, -2, 8, -8, 4, -4, 6, -6]), 0)
// console.log(findMissing([-1, -4, -3, -5, -6, -7, -8, -9]), -2)

// function find(seq) {
//     let interval = null;
//     seq = seq.sort((a, b) => a - b)
//     interval = seq[1] - seq[0];
//     if (seq[seq.length - 1] - seq[seq.length - 2] < interval) {
//         interval = seq[seq.length - 1] - seq[seq.length - 2]
//     }
//     return seq.find((num, ind) => num !== ind * interval + seq[0]) - interval;
// }
// function find(seq) {
//     let interval = null;
//     seq = seq.sort((a, b) => a - b)
//     interval = seq[1] - seq[0];
//     if (seq[seq.length - 1] - seq[seq.length - 2] < interval) {
//         interval = seq[seq.length - 1] - seq[seq.length - 2]
//     }
//     for (i = seq.length - 1; i > 1; i--) {
//         if ((seq[i]) - interval !== seq[i - 1]) {
//             return seq[i] - interval;
//         }
//     }
//     return -0;
// }

function find(seq) {
    let min = seq[0];
    let max = seq[0];
    let sum = 0;
    for (i = 0; seq.length > i; i++) {
        if (seq[i] > max) {
            max = seq[i];
        }
        if (seq[i] < min) {
            min = seq[i];
        }
        sum += seq[i];
    }
    const total = ((seq.length + 1) / 2) * (min + max)
    return total - sum;
}
