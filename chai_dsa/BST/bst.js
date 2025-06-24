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

        // Duplicate, do nothing
    }

    delete(key) {
        this.root = this.deleteNode(this.root, key);
    }

    deleteNode(node, key) {
        if (node === null) {
            return null;
        }

        if (key < node.key) {
            node.left = this.deleteNode(node.left, key);
            return node;
        }

        if (key > node.key) {
            node.right = this.deleteNode(node.right, key);
            return node;
        }

        // Case 1: Leaf node
        if (node.left === null && node.right === null) {
            return null;
        }

        // Case 2: One child
        if (node.left === null) {
            return node.right;
        }

        if (node.right === null) {
            return node.left;
        }

        // Case 3: Two children
        let tempNode = this.findMinNode(node.right);
        node.key = tempNode.key;
        node.right = this.deleteNode(node.right, tempNode.key);

        return node;
    }

    findMinNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    // taversal
    // in order => left root right
    inorderTraversal() {
        const result = [];
        this.inorder(this.root, result)
        return result;
    }

    inorder(node, result) {

        if (node !== null) {
            this.inorder(node.left, result)
            result.push(node.key)
            this.inorder(node.right, result)
        }
    }

    // pre order => root left right
    preOrderTraversal() {
        const result = [];
        this.preOrder(this.root, result)
        return result;
    }

    preOrder(node, result) {

        if (node !== null) {
            result.push(node.key)
            this.preOrder(node.left, result)
            this.preOrder(node.right, result)
        }
    }

    // pre order => left right root 

    postOrderTraversal() {
        const result = [];
        this.postOrder(this.root, result)
        return result;
    }
    postOrder(node, result) {

        if (node !== null) {
            this.postOrder(node.left, result)
            this.postOrder(node.right, result)
            result.push(node.key)
        }
    }
}




// const tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(7);
// tree.insert(2);
// tree.insert(12);
// tree.insert(11);
// tree.insert(15);

// console.log("Before delete:");
// console.log(JSON.stringify(tree, null, 2));

// tree.delete(10); // Deleting root node with two children

// console.log("After delete:");
// console.log(JSON.stringify(tree, null, 2));

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);


console.log('Inorder:', tree.inorderTraversal());
console.log('Preorder:', tree.preOrderTraversal());
console.log('Postorder:', tree.postOrderTraversal());
