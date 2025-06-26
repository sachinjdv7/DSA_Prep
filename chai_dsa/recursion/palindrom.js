
/*
  madam
  ada
   d

*/
function palindromeRecursive(str) {

    if (str.length === 1) {
        return true
    }

    if (str[0] === str[str.length - 1]) {
        return palindromeRecursive(str.substring(1, str.length - 1))
    } else {
        return false
    }
}

console.log(palindromeRecursive('madam'))