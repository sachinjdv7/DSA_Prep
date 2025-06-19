class Stack {
    constructor() {
        this.stack = []
    }

    push(data) {
        this.stack.push(data)
    }
    pop() {
        return this.stack.pop() // return removed value
    }
    peek() {
        return this.stack[this.stack.length - 1]
    }
    isEmpty() {
        return this.stack.length === 0
    }
    size() {
        return this.stack.length
    }
    clear() {
        this.stack = []
    }
    contains(ele) {
        return this.stack.includes(ele)
    }
    reverse() {
        // this.stack.reverse()     // this one mutate the original stack
        return [...this.stack].reverse();
    }
    printStack() {
        let str = ""
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i]
        }
        return str + "\n"
    }
}

const stack = new Stack()
stack.push(10)
stack.push(15)
stack.push(16)

console.log(stack.printStack())