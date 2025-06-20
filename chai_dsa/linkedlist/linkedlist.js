
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

// search operation

LinkedList.prototype.search = function (key) {
    let current = this.head;

    while (current) {
        if (current.data === key) return true
        current = current.next
    }
    return false
}

// traversal

LinkedList.prototype.printList = function () {

    if (!this.head) return "List is empty";

    let current = this.head;
    let res = [];
    while (current) {
        res.push(current.data)  // add data to list
        current = current.next;  // move to next node
    }
    return res.join(" -> ")
}

// little challenging 
// reverse linked list

LinkedList.prototype.reverse = function () {

    let current = this.head;
    let prev = null;
    let next = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.head = prev
}