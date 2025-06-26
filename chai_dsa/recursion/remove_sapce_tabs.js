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

// recursive

function recursiveRTAS(inputString) {

    if (inputString.length === 0) return ""

    const FirstChar = inputString[0];
    const restOfString = inputString.slice(1)

    if (FirstChar === " " || FirstChar === "\t") {
        return recursiveRTAS(restOfString)
    }


    return FirstChar + recursiveRTAS(restOfString)
}

console.log(recursiveRTAS("  sa  ch i   n "))