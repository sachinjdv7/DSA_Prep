// reverse arr without extra space

let arr = [1, 5, 9, 3, 8]

let i = 0;
let j = arr.length - 1;

while (i < j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++;
    j--
}
console.log(arr)