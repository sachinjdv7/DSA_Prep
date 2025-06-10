
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

/*

*
* *
* * *
* * * *

 */

for (let i = 1; i <= 5; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row += "* "
    }
    console.log(row)
}

for (let i = 1; i <= 4; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row += j
    }
    console.log(row)
}



/*

* * * *
* * *
* *
*


*/

for (let i = 1; i <= 4; i++) {
    let row = ""
    for (let j = 4; j >= i; j--) {
        row += "* "
    }
    console.log(row)
}

/* 

   * 
  * * 
 * * * 
* * * * 



*/

for (let i = 1; i <= 4; i++) {
    row = ""
    for (let s = 1; s <= 4 - i; s++) {
        row += " "
    }
    for (let j = 1; j <= i; j++) {
        row += "* "
    }
    console.log(row)
}