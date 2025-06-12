
function factor(n) {

    n = Number(n)

    if (isNaN(n) || n === undefined || n < 0 || !Number.isInteger(n)) {
        return "give valid input"
    }
    let res = "1, "
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            res += i + ", "
        }
    }
    res += n

    return res
}

console.log(factor(36))