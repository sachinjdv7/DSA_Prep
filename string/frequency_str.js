
function frequency(str) {
    let arr = new Array(128).fill(0)

    for (let i = 0; i < str.length; i++) {

        let index = str.charCodeAt(i)

        arr[index] = arr[index] + 1
    }
    let result = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result[String.fromCharCode(i)] = arr[i];

        }
    }
    return result

}
console.log(frequency("hello"))