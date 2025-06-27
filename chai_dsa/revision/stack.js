// stack lIFO
// stack implementation

class Stack {
    constructor(limit = Infinity) {
        this.stack = []
        this.limit = limit
    }
}
Stack.prototype.push = function (data) {
    // what if stack full
    if (this.stack.length >= this.stack.limit) {
        throw new Error("Stack overflow")
    }
    this.stack.push(data)
}

Stack.prototype.pop = function () {
    // if stack is empty
    if (this.isEmpty()) return "Stack is empty"
    return this.stack.pop()
}

Stack.prototype.peek = function () {
    return this.stack[this.stack.length - 1]
}

Stack.prototype.isElementPresent = function (ele) {
    return this.stack.includes(ele)
}

Stack.prototype.isEmpty = function () {
    return this.stack.length === 0
}

Stack.prototype.size = function () {
    return this.stack.length
}

Stack.prototype.clear = function () {
    return this.stack = []
}

Stack.prototype.reverse = function () {
    return this.stack.reverse()
}

Stack.prototype.printStack = function () {
    //   let str = ""
    //   for(let ele of this.stack){
    //       str += ele + "\n"
    //   }
    return this.stack.join('\n');
}





const stack = new Stack(5);
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack:");
console.log(stack.printStack());
console.log("Top element:", stack.peek());
console.log("Popped:", stack.pop());
console.log("Is 2 in stack?", stack.isElementPresent(2));



