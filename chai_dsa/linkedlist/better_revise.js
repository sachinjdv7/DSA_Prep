class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    // add at beginning
    addAtBeginning(data) {
        const newNode = new Node(data, this.head);
        this.head = newNode;
    }

    // add at last
    addAtLast(data) {
        let newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            return
        }
        let secondLast = this.head;

        while (secondLast.next) {
            secondLast = secondLast.next
        }

        secondLast.next = newNode;
    }

    //traverse
    printList() {

        if (!this.head) return "List is empty";

        let arr = []
        let current = this.head

        while (current) {
            arr.push(current.data);
            current = current.next
        }

        return arr.join(" -> ")
    }
}
const list = new LinkedList();
list.addAtBeginning(40)
list.addAtBeginning(50)
list.addAtBeginning(60)
list.addAtLast(10)
list.addAtLast(20)
list.addAtLast(30)
console.log(list.printList())


