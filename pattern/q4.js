
for (let i = 1; i <= 5; i++) {
    for (let s = 1; s <= 5 - i; s++) {
        process.stdout.write(" ")
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log()
}