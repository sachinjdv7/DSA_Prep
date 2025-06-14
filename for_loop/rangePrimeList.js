function isPrime(n) {

    if (n <= 0) return false
    if (n === 1) return false
    if (n === 2) return true
    if (n % 2 === 0) return false

    for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
        if (n % i === 0) return false
    }
    return true
}

function isPrimeRange(limit) {
    let primeList = ""
    for (let i = 1; i <= limit; i++) {
        if (isPrime(i)) {
            primeList += (primeList === "" ? "" : ",") + i;
        }
    }
    return primeList
}
console.log(isPrimeRange(10))