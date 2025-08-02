
Function.prototype.describe = function () {
    console.log(`${this.name}`)
}

function masalaChai() { }

function greet(name) {   // name => parameter
    return `Hello ${name}`
}
greet("sachin") // sachin => argument
greet.describe()
masalaChai.describe()


// function declaration
function add(a, b) {
    return a + b
}

// function expression

const substract = function (a, b) {
    return a - b
}

// arrow function

const multiply = (a, b) => a * b

/**
 * applyOperation is a higher-order function (it takes a function as an argument)
 * 
 * ✅ What does first-class functions mean?
In JavaScript (and many modern languages), functions are first-class citizens, meaning:

➤ Functions can be treated like any other value.

Specifically, you can:

1.Assign a function to a variable

2.Pass a function as an argument to another function

3.Return a function from another function

4.Store functions in objects or arrays
*/

function applyOperation(a, b, operation) {
    return operation(a, b)
}

const result = applyOperation(10, 20, (x, y) => x / y)


function creteCounter() {

    let count = 0;

    return function () {
        return count++
    }
}

const counter = creteCounter();
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())



function sum(a, b, cb) {
    return cb(a + b)
}


const res = sum(10, 20, (res) => res)
console.log(res)