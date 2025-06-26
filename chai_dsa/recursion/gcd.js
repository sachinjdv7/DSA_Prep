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