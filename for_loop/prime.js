function isPrime(num) {
    num = Number(num);

    if (!Number.isInteger(num) || isNaN(num) || num === undefined || num <= 1) {
        return false;
    }
    // make iteration half
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
// Example of user input (in a real-world scenario, this could be from a form or console input)
const userInput = 5;
console.log(`Is ${userInput} a prime number? `, isPrime(userInput));


// more optimize solution

function isPrimePro(n) {
    if (n <= 1) return false;
    if (n === 2) return true
    if (n % 2 === 0) return false

    for (let i = 3; i <= Math.floor(Math.sqrt(n)); n += 2) {
        if (n % i) return false

    }

    return true
}

console.log(isPrimePro(6546546546512))