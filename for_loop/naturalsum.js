// print sum of natural number to n

function naturalSum(n) {
    n = Number(n)

    if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
        return "Give me valid number more than 0 and positive"
    }

    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum

}

console.log(naturalSum(5))


// o(1)

// function naturalSum1(n) {
//     return (n * (n + 1) / 2)
// }
// console.log(naturalSum1(6))