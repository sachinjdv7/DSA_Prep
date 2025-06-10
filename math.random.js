


function generateOtp(length = 4) {
    let otp = ""
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10)
    }
    return otp
}
console.log(generateOtp())


function generateOtp1(length = 6) {
    let otp = ""
    for(let i=0; i<length; i++){
        otp += Math.floor(Math.random()*10)
    }
    return otp
}
console.log(generateOtp1())



















const colors = ['red', 'blue', 'yellow']

const ramdomColor = colors[Math.floor(Math.random() * colors.length)]

console.log(ramdomColor)


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(getRandom(5, 15))
console.log(getRandom(5, 15))
console.log(getRandom(5, 15))













const random0to9 = Math.floor(Math.random() * 10)

console.log(random0to9)
console.log(random0to9)
console.log(random0to9)
console.log(random0to9)
console.log(random0to9)
console.log(random0to9)
console.log(random0to9)
console.log(random0to9)
console.log(random0to9)
console.log(random0to9)
console.log(random0to9)