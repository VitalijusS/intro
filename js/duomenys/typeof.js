/* 
duomens tipo nustatymas

TYPEOF 

*/

console.log(typeof 'a');
console.log(typeof 1);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof {});
console.log(typeof null);
console.log(typeof []);
console.log(typeof ["a", 1]);
console.log(typeof empty);


//ar array
console.log(Array.isArray(['a']));
console.log(Array.isArray("a"));
function empty(v1) {
    if (typeof v1 !== 'string') {
        return 'aaa';
    } else {
        return v1.length;
    }

}
console.log(empty(5));