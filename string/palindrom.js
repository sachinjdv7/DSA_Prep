// madam => madam
// nitin => nitin

function isPalindrom(str) {

    let rev = ""
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str.charAt(i)
    }

    if (rev === str) return "palindrom"
    else return "not palindrom"

}

console.log(isPalindrom("jesdf"))