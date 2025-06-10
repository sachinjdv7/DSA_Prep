
/**
 * swap first without extra variable
*/

let a = 66;
let b = 30;

a = a + b;
b = a - b;
a = a - b

console.log("a=" + a, "b=" + b)

/**
 * swap second way
*/

let x = 50;
let y = 40;
let z;

z = x
x = y
y = z

console.log("x=" + x, "y=" + y)

/**
 * swap third way
*/

let c = 55
let d = 66

[c, d] = [d, c]
console.log(c, d)







