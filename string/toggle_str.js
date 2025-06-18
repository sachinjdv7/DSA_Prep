// Sachin => sACHIN
// a => A
// A = > a

/*

1. fist iterate(loop) over str char
2. Each char convert into charCode => charCodeAt
3. compare for the upper 65 equal to 90 equal 
4. if it is capital then + 32
5. else -32 for the lowercase  97 => 122

*/


function toggleString(str) {
    let toggle = ""

    for (let i = 0; i < str.length; i++) {

        let charCode = str.charCodeAt(i)

        if (charCode >= 65 && charCode <= 90) {

            toggle += String.fromCharCode(charCode + 32)
        }

        if (charCode >= 97 && charCode <= 122) {

            toggle += String.fromCharCode(charCode - 32)
        }
    }
    return toggle

}
console.log(toggleString("surraja"))


