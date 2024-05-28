
function turboIndexOf(list, search) {
    return list.join('...').includes(search.join('...'));
}

console.log(turboIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2]))
console.log(turboIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3]))
console.log(turboIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 5]))
console.log(turboIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [9, 1, 0]))
console.log(turboIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [2, 3, 4, 5, 6, 7]))

