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

// two pointer

function isPalindrom1(str) {
    let i = 0, j = str.length - 1

    while (i < j) {
        if (str.charAt(i) !== str.charAt(j)) {
            return "not palindrom"
        }
        i++;
        j--
    }
    return "palindrom"
}

console.log(isPalindrom1("nitin"))
