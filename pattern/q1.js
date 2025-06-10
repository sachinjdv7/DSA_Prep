/* 

create below pattern

* * * * * 
* * * * * 
* * * * *
* * * * * 
* * * * *

*/
const n = 5
for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= n; j++) {
        row += "* "
    }
    console.log(row)
}

// way 1;

console.log("way 1")
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        process.stdout.write("* ")
    }
    console.log()
}