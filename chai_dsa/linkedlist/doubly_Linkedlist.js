class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null
    }
}

DoublyLinkedList.prototype.insertAtBeginning = function (data) {

    let newNode = new Node(data, this.head, null);

    if (this.head) {
        this.head.prev = newNode
    }

    this.head = newNode

    if (!this.tail) {
        this.tail = newNode
    }
}

DoublyLinkedList.prototype.insertAtLast = function (data) {

    let newNode = new Node(data, null, this.tail)

    if (this.tail) {
        this.tail.next = newNode
    }

    this.tail = newNode

    if (!this.head) {
        this.head = newNode
    }
}

DoublyLinkedList.prototype.insertAfter = function (prevNode, data) {

    let newNode = new Node(data, prevNode.next, prevNode)

    if (prevNode.next) {
        prevNode.next.prev = newNode
    }

    prevNode.next = newNode

    if (!newNode.next) {
        this.tail = newNode
    }
}