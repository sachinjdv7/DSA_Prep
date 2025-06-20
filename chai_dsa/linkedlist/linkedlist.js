
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

// delete first node
LinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) return

    this.head = this.head.next
}

// delete last node
LinkedList.prototype.deleteLastNode = function () {

    if (!this.head) {
        return        // nothing to delete list is empty
    }

    if (!this.head.next) {
        this.head = null // if there is only one node
    }

    let secondLast = this.head

    while (secondLast.next.next) {
        secondLast = secondLast.next
    }

    secondLast.next = null
}

LinkedList.prototype.deleteByKey = function (key) {
    // list is empty
    if (!this.head) {
        return "List is empty"
    }

    //data found at head
    if (this.head.data === key) {
        this.head = this.head.next
        return
    }

    let current = this.head

    while (current.next !== null) {
        if (current.next.data === key) {
            current.next = current.next.next
            return
        }
        current = current.next
    }
    return `No node found with key: ${key}`
}

