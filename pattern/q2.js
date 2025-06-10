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

/* 

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/

console.log("....number pattern1 ......")

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j.toString() + " ")
    }
    console.log()
}

/* 
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5

*/
console.log("........pattern 3 ..............")
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        // if (i === j)
        process.stdout.write(i.toString() + " ")
    }
    console.log()
}