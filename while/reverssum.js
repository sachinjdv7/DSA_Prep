// 1234=> 4+3+2+1


function reverseSum(n) {
    n = Number(n)

    if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
        throw new Error("Enter positve number")
    }
    let sum = 0
    while (n > 0) {
        const reminder = n % 10;
        n = Math.floor(n / 10)
        sum += reminder;
    }
    return sum
}

console.log(reverseSum(5578))