function isPrime(num) {
    num = Number(num);

    if (!Number.isInteger(num) || isNaN(num) || num === undefined || num <= 1) {
        return false;
    }

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