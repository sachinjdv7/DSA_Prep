function moveLeftneg(arr) {
    let i = 0;
    let j = 0

    while (i < arr.length) {
        if (arr[i] < 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp
            j++;
        }
        i++
    }
    return arr;
}

console.log(moveLeftneg([1, -2, 3, -4, -5, 6]))