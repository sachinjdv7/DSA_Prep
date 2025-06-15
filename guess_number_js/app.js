
const randomNumber = Math.floor(Math.random() * 100) + 1
console.log(randomNumber)

let guess = -1

while (randomNumber !== guess) {
    guess = Number(prompt("Enter the number"))
    if (isNaN(guess) || guess < 1 || guess > 100) {
        console.log("Enter the number b/w 1 to 100")
        // continue
    }
    break
}