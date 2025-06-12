

/**
 * for loop working
 * 1. In the example here fist check i = 1 and check condition
 * 2. then execute the block 
 * 3. then increment
 */
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

let j = 0;
for (; j <= 10; j++) {
    console.log(j) // loop will terminate
}
console.log(j) // 11

for (let i = 1; i <= 10;) {
    console.log(i)  // still works but goes infinite
}

for (let i = 1; ;) {
    console.log(i)  // still works but goes infinite
}

for (; ;) {
    console.log(i)  // still works but goes infinite
}

