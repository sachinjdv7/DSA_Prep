function revStr(str) {

    let stack = [];

    for (let char of str) {
        stack.push(char)
    }
    let rev = ""
    while (stack.length > 0) {
        rev += stack.pop() + "\n"
    }
    return rev
}
console.log(revStr("sachin"))