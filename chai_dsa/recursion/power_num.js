
function power(base, exp) {

    if (exp == 0) return 1

    return base * power(base, exp - 1)
}

console.log(power(2, 3))


// iterative

function pow(base, exp) {
    let res = 1

    for (let i = 0; i < exp; i++) {
        res *= base
    }
    return res
}
console.log(pow(4, 2))