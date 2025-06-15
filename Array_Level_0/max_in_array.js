// max in arr [10, 60, 20, 30, 50]
// max 50


// using for loop
function maxInArray(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}

// using while loop

function maxInArray1(arr) {
    let max = arr[0]
    let i = 1
    while (arr.length) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

const arr = [10, 60, 20, 30, 50]

const copy_arr = [...arr]
console.log(maxInArray(copy_arr))
console.log(maxInArray1(copy_arr))


// using reduce

const newMax = copy_arr.reduce((max, curr) => curr > max ? curr : max)
console.log("max", newMax)
