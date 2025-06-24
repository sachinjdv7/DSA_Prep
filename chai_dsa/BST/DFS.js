
class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

const depthFirstTraverse = (root) => {
    const values = [];
    const stack = [root];

    if (root === null) {
        return values
    }

    while (stack.length > 0) {
        const node = stack.pop()
        values.push(node.key)
        if (node.right !== null) {
            stack.push(node.right)
        }

        if (node.left !== null) {
            stack.push(node.left)
        }
    }
    return values;

}

const recursiveDFT = (root) => {

    if (root === null) {
        return
    }

    const lefValues = recursiveDFT(root.left)
    const rightValues = recursiveDFT(root.right)

    // return [root.key, lefValues, rightValues]

    return [root.key, ...lefValues, ...rightValues]
}


