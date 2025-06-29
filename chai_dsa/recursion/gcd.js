/* 
 find greatest common division

 input : 42 and 18

 42 divisor are 1,2,3,6,7,14,21,42
 18 divisor are 1,2,3,6,9, 18

*/

function gcd(num1, num2) {

    if (num1 === num2) return num1;

    if (num1 > num2) {
        return gcd(num1 - num2, num2)
    } else {
        return gcd(num2 - num1, num1)
    }
}

console.log(gcd(88, 96))


// iterative

function gcdIterative(num1, num2) {
    const num1Factor = []
    const num2Factor = []

    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0) {
            num1Factor.push(i)
        }
    }

    for (let i = 1; i <= num2; i++) {
        if (num2 % i === 0) {
            num2Factor.push(i)
        }
    }

    let common = [];
    for (let i = 0; i < num1Factor.length; i++) {
        if (num2Factor.includes(num1Factor[i])) {
            common.push(num1Factor[i]);
        }
    }

    return Math.max(...common)

}

console.log(gcdIterative(42, 18))