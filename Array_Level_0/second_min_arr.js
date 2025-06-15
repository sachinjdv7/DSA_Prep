let arr = [40, 2, 2, 3, 4]

let min = Math.min(arr[0], arr[1])
let smin = Math.max(arr[0], arr[1])

for (let i = 2; i < arr.length; i++) {
    if (arr[i] < min) {
        smin = min;
        min = arr[i]
    } else if (arr[i] < smin && arr[i] !== min) {
        smin = arr[i]
    }
}
min
smin
