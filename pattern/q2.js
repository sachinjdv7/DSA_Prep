/* 
create below pattern

*
* *
* * *
* * * *
* * * * * 
*/

const n = 5
for (let i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log()
}