function reverseString(str) {
    let rev = "";
    let length = str.length - 1;

    while (length >= 0) {

        rev += str[length]

        length = length - 1
    }

    return rev
}

console.log(reverseString("hello"))