
function reverseStr(str) {
    let rev = ""
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str.charAt(i)
    }
    return rev
}

// other way
function reverseStr1(str) {
    return str.split("").reverse().join("")
}



console.log(reverseStr("sachin"))
console.log(reverseStr1("sachin"))

// other way