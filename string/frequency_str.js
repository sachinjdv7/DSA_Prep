
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



function frequencyMap(str) {
    const map = new Map();

    for (let char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    return [...map]
        .map(([char, count]) => `${char} appears ${count} time${count > 1 ? "s" : ""}`)
        .join("\n");
}
console.log(frequencyMap("hello"))


/// always use this 

function frequency(str) {
    let map = new Map();

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (map.has(char)) {
            let currentCount = map.get(char);
            map.set(char, currentCount + 1);
        } else {
            map.set(char, 1);
        }
    }

    return map;
}

// To print the result in order
let result = frequency("hello");

for (let [char, count] of result) {
    console.log(`${char} appears ${count} time${count > 1 ? 's' : ''}`);
}
