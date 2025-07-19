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


// better

function checkIsPangram(sentence) {
    const set = new Set();

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i].toLowerCase();

        // Only consider letters a–z
        if (char >= 'a' && char <= 'z') {
            set.add(char);

            // Early exit: 26 letters collected
            if (set.size === 26) {
                return true;
            }
        }
    }

    return false;
}
