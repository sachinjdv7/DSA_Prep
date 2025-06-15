
function minArr(arr) {
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

const arr = [45, 20, 78, 45]

const cp = [...arr]

console.log(`min in arr is ${minArr(cp)}`)


newMin = arr.reduce((min, val) => val < min ? val : min)
newMin