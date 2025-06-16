// left rotation by element 1 

let arr = [1, 2, 3, 4, 5]

let cp = arr[arr.length - 1]

for (let i = arr.length - 1; i >= 1; i--) {
    arr[i] = arr[i - 1]
}
arr[0] = cp
console.log(arr)