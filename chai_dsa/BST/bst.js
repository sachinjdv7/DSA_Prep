class BSTNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(key) {

        const newNode = new BSTNode(key)

        if (this.root === null) {
            this.root = newNode
            return
        }

        return this.insertNode(this.root, newNode)

    }

    insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
                return;
            }
            return this.insertNode(node.left, newNode);
        }

        if (newNode.key > node.key) {
            if (node.right === null) {
                node.right = newNode;
                return;
            }
            return this.insertNode(node.right, newNode);
        }

        // Duplicate key: do nothing
    }

}