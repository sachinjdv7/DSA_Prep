
class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
}


LinkedList.prototype.insertAtBeginning = function (data) {
    let newNode = new Node(data)
    this.head = newNode
}

LinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data)
    if (!this.head) {
        this.head = newNode
    }
    let last = this.head
    while (last.next) {
        last = last.next
    }

    last.next = newNode
}

LinkedList.prototype.insertAt = function (prevNode, data) {

    if (!prevNode) return "The preNode can not be null";

    const newNode = new Node(data, prevNode.next)
    prevNode.next = newNode
}
