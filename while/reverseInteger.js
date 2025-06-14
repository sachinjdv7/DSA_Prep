
function reverseInteger(n) {
    let rev = 0
    while (n > 0) {
        let reminder = n % 10
        n = Math.floor(n / 10)
        rev = rev * 10 + reminder
    }
    return rev
}
console.log(reverseInteger(12345))