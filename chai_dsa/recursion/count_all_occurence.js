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