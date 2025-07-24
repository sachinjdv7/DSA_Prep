
function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
        }

    }

    return null
}
console.log(twoSum([15, 2, 11, 7], 9))

/**
 * time complexity: O(n^2)
 * space complexity: O(1)
 */

// second approach

function twoSum1(arr, target) {

    let map = new Map()
    for (let i = 0; i < arr.length; i++) {


        if (map.has(target - arr[i])) {
            return [i, map.get(target - arr[i])]
        } else {
            map.set(arr[i], i)
        }
    }
    return [-1, -1]
}

console.log(twoSum1([15, 2, 11, 7], 9))

/**
 * time complexity: O(n)
 * space complexity: O(n)
 */
