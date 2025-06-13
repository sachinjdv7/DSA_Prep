
for (let i = 1; i <= 13; i++) {
    if (i === 11) break // this print to 10 ignore 11
    else console.log(i)
}

for (let i = 1; i <= 13; i++) {
    if (i === 11) continue // loop keep going only skip 11
    else console.log(i)
}