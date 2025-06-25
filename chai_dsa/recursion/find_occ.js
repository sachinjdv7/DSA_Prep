/*
 arr = [3,4,1,8,1,7]
 
 findMe = 1; 
 currentIndex = 0;
 output -> 2

 if not found = return -1
 
 */

function findMe(arr, ele) {

    for (let i = 0; i < arr.length; i++) {

        if (ele === arr[i]) {

            return i;
        }
    }

    return -1
}

console.log(findMe([3, 4, 1, 8, 1, 7], 1))


