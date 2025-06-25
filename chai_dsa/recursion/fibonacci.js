// iterative

function fibonacci(value) {

    let n0 = 0;
    let n1 = 1

    for (let i = 0; i < value; i++) {

        let temp = n0 + n1
        n0 = n1;
        n1 = temp

    }

    return n0

}

console.log(fibonacci(7))

// recursive

function fibRec(n) {

    if (n == 0 || n == 1) return n

    return fibRec(n - 1) + fibRec(n - 2)
}
console.log(fibRec(5))