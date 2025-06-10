/*

* * * * * 
* * * *
* *
*

*/

const n = 5
for (let i = 0; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
        process.stdout.write("* ")
    }
    console.log()
}