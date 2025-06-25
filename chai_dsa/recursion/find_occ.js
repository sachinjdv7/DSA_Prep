/*
 arr = [3,4,1,8,1,7]
 
 findMe = 1; 
 currentIndex = 0;
 output -> 2

 if not found = return -1
 
 */

function findOcc(arr, findme, currIndex) {

    while (currIndex < arr.length) {
        if (arr[currIndex] === findme) {

            return currIndex
        }
        currIndex += 1
    }
    return -1
}

console.log(findOcc([3, 4, 1, 8, 1, 7], 1, 0))


// recursive

function recursiveOcc(arr, findme, currIndex) {

    if (arr.length === currIndex) {
        return -1
    }

    if (arr[currIndex] === findme) {
        return currIndex
    }

    return recursiveOcc(arr, findme, currIndex + 1)
}

console.log(recursiveOcc([3, 4, 8, 1, 7], 1, 0))


function findMe(arr, ele) {

    for (let i = 0; i < arr.length; i++) {

        if (ele === arr[i]) {

            return i;
        }
    }

    return -1
}

console.log(findMe([3, 4, 1, 8, 1, 7], 1))


