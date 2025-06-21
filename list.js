class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

class List {
    constructor() {
        this.head = null
    }

    insertAtBeginning(data) {
        let newNode = new Node(data, this.head)
        this.head = newNode
    }

    insertAtLast(data) {
        let newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            return
        }
        let last = this.head

        while (last.next) {
            last = last.next
        }

        last.next = newNode
    }

    insertAtGivenNode(prevNode, data) {
        if (!prevNode) return "Previous node can not be null"
        let newNode = new Node(data, prevNode.next)
        prevNode.next = newNode
    }

    deleteHead() {
        if (!this.head) return "empty list nothing to delete"

        this.head = this.head.next
    }

    deleteLast() {
        // empty head
        if (!this.head) return "nothing to delete"
        // only one value
        if (!this.head.next) {
            this.head = null
            return
        }

        let secondLast = this.head

        while (secondLast.next.next) {
            secondLast = secondLast.next
        }

        secondLast.next = null

    }

    // delete by key

    deleteByKey(key) {
        if (!this.head) {
            return "nothing to delete"
        }
        // data found at head
        if (this.head.data === key) {
            this.head = this.head.next
            return `delete node with key: ${key}`
        }

        //if we have traverse to all list
        let current = this.head;
        while (current.next) {
            if (current.next.data === key) {
                current.next = current.next.next
                return `delete node with key: ${key}`
            }
            current = current.next
        }

        return `no node found with key: ${key}`
    }


    // traversal
    printList() {
        let current = this.head
        if (!current) return "List is empty"
        let arr = []
        while (current) {
            arr.push(current.data)
            current = current.next
        }
        return arr.join(" -> ")
    }

}

const list = new List()
list.insertAtBeginning(30)
// list.insertAtBeginning(40)

list.insertAtLast(10)
list.insertAtLast(20)
// list.deleteHead()
// list.deleteHead()
// list.deleteLast()
// list.deleteLast()
// list.deleteLast()
// list.deleteByKey(30)
console.log(list.deleteByKey(10))

console.log(list.printList())

