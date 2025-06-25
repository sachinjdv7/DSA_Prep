
function isVowel(char) {

    char = char.toLowerCase()

    vowel = ["a", "e", "i", "o", "u"]

    if (vowel.includes(char)) return true

    return false
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

