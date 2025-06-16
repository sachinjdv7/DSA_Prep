//left rotation by k

function leftRoationk(arr, k) {

    for (let j = 1; j <= k; j++) {
        cp = arr[0]
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1]
        }
        arr[arr.length - 1] = cp
    }

    return arr
}


let arr = [1, 2, 3, 4, 5]
let cp = [...arr]
let k = 2
console.log("orignal arr=>", arr)
console.log("rorate arr=>", leftRoationk(cp, k))