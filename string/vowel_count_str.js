
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

/* 
time complexity - O(n)
space complexity - O(n)
*/
//========================================

function vowelCount1(str) {

    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    // return vowels
    let count = 0
    for (char of str) {
        vowels.has(char.toLowerCase()) && count++
    }
    // for (let i = 0; i < str.length; i++) {
    //     let char = str.charAt(i).toLowerCase()
    //     if (vowels.has(char)) {
    //         count++
    //     }
    // }
    return count

}
console.log(vowelCount1("hey how are you"))

/* 
time complexity - O(n)
space complexity - O(1)
*/




const s = new Set();
s.add(1);
s.add(2);
s.add(2); // ignored
console.log(s); // Set(2) { 1, 2 }


let nums = [1, 2, 2, 3, 4, 4];
let unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3, 4]

