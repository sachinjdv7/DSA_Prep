
function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

const sum1 = a => b => c => a + b + c

console.log(sum(5)(10)(10))
console.log(sum1(5)(88)(10))


//What is type of null,undefined,function ,NaN.

console.log(typeof null)
console.log(typeof undefined)
console.log(typeof function () { })
console.log(typeof NaN)