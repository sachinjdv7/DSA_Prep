
function isVowel(char) {

    char = char.toLowerCase();

    let vowel = ["a", "e", "i", "o", "u"];

    return vowel.includes(char);
}

function vowelCount(string) {
    let count = 0

    for (char of string) {

        if (isVowel(char)) {
            count += 1
        }
    }
    return count
}

console.log(vowelCount("sachin"))

// recursive

function recursiveStringCount(string, stringLength) {

    console.log(`Length: ${stringLength}, current Sting: ${string.substring(0, stringLength)} `)

    if (stringLength === 1) {
        console.log("Base case got hit here");
        console.log("Base case value: ", Number(isVowel(string[0])))

        return Number(isVowel(string[0]))
    }

    // return recursiveStringCount(string, stringLength - 1) + Number(isVowel(string[stringLength - 1]))
    let result = recursiveStringCount(string, stringLength - 1) + Number(isVowel(string[stringLength - 1]))
    console.log(`Count after checking ${string[stringLength - 1]} : ${result}`)
    return result
}

let myString = "hello"
console.log(recursiveStringCount(myString, myString.length));

