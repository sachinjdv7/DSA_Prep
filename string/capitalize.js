
function capitalizeSentence(sentence) {
    let str = ""
    for (let i = 0; i < sentence.length; i++) {
        // console.log(sentence[i])
        if (i === 0 || sentence[i - 1] === " ") {
            str += sentence[i].toUpperCase()
        } else {
            str += sentence[i]
        }
    }
    return str
}
console.log(capitalizeSentence("i am god developer"))