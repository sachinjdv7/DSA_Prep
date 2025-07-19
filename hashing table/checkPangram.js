// check pangram

function checkIsPangram(sentence) {
    sentence = sentence.toLowerCase()
    const set = new Set()

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence.charAt(i)
        set.add(char)
    }

    return set.size == 26
}
console.log(checkIsPangram("Thequickbrownfoxjumpsoverthelazydog"));
console.log(checkIsPangram("Hello World")); 
