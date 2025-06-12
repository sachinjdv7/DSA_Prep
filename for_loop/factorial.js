

function factorial(n) {
    n = Number(n)

    if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
        return "Give pos and more than 0"
    }

    if (n === 0 || n === 1) return 1

    let fact = 1

    for (let i = 1; i <= n; i++) {
        fact *= i
    }
    return fact
}

console.log(factorial(5))