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

DoublyLinkedList.prototype.deleteFirstNode = function () {

    if (!this.head) {
        return "Nothing to delete"
    }

    if (this.head === this.tail) {

        this.head = null
        this.tail = null


    } else {

        this.head = this.head.next;
        this.head.prev = null
    }

}

DoublyLinkedList.prototype.printList = function () {
    console.log("HEAD:", this.head?.data, "| TAIL:", this.tail?.data);
    let current = this.head
    let arr = []
    while (current) {
        arr.push(current.data)
        current = current.next
    }
    return arr.join("<- ->")
}

DoublyLinkedList.prototype.deleteLastNode = function () {

    if (!this.tail) return "DLL is empty"

    if (this.head === this.tail) {

        this.head = null
        this.tail = null

    } else {

        this.tail = this.tail.prev
        this.tail.next = null
    }
}

DoublyLinkedList.prototype.reverse = function () {

    let current = this.head
    let temp = null

    while (current) {
        temp = current.prev
        current.prev = current.next
        current.next = temp

        // moving to the next node
        current = current.prev
    }

    if (!temp) {
        this.tail = this.head;
        this.head = temp.prev
    }
}