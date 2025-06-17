
let str = "Hey how are you"

let vowel = ['a', 'e', 'i', 'o', 'u']

function vowelCount(str) {
    let count = 0;
    let lowercase = str.toLowerCase()

    lowercase.split("").forEach((el) => {
        vowel.includes(el) && count++
    })

    return count
}

console.log(vowelCount(str))