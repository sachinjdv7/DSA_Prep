
function length(str) {

    let count = 0

    while (str[count] !== undefined) {
        count++
    }
    return count
}

console.log(length("sachin"))

function recursive(str) {

    if (str === "") return 0

    return 1 + recursive(str.substring(1))
}

console.log(recursive("sachin"))
