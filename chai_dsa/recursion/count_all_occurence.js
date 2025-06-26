// [1,2,3,4,2,8,7,2]

function countKeyIA(arr, key) {

    let count = 0;

    for (let ele of arr) {

        if (ele === key) {
            count++
        }
    }
    return count
}
console.log(countKeyIA([1, 2, 3, 4, 2, 8, 7, 2], 2))

function recursiveCountKeyIA(arr, key, index) {

    if (index >= arr.length) return 0

    return (arr[index] === key ? 1 : 0) + recursiveCountKeyIA(arr, key, index + 1)

}

console.log(recursiveCountKeyIA([1, 2, 3, 4, 2, 8, 7, 2], 2, 0))
