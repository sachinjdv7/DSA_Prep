// task is to remove all tabs and spaces from a sting .
// this includes the character \t and " " from a string

function removeTAS(str) {

    let result = ""

    for (let char of str) {

        if (char !== " " && char !== "\t") {
            result += char
        }
    }
    return result
}

console.log(removeTAS("  sa  ch i   n "))