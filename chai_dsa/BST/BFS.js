class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

const BFS = (root) => {
    const values = [];

    if (root === null) {
        return values
    }

    const queue = [root]


    while (queue.length > 0) {
        const node = queue.shift()
        values.push(node.key)

        if (node.left !== null) {
            queue.push(node.left)
        }

        if (node.right !== null) {
            queue.push(node.right)
        }

    }
    return values
}