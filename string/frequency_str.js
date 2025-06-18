
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


function frequencyMap(str) {
    let map = new Map()
    let res = []

    for (let char of str) {

        if (!map.has(char)) {
            map.set(char, 1)
        } else {
            map.set(char, map.get(char) + 1)
        }
    }

    for (let [char, count] of map) {
        res.push(`${char} appears ${count} time${count > 1 ? "s" : ""}`)
    }

    return res.join("\n")
}
console.log(frequencyMap("hello"))


let map = new Map();
map.set("h", 1);
map.set("e", 1);
map.set("l", 2);
map.set("o", 1);

console.log(map)

for (char of map) {
    console.log(char)
}
