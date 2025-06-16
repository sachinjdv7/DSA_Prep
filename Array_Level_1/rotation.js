// left rotation by element 1 
// arr => [1, 2, 3, 4, 5]
// o/p=> [ 2, 3, 4,5, 1]

let arr = [1, 2, 3, 4, 5]

let cp = arr[0]

for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]
}
arr[arr.length - 1] = cp

console.log(arr)