
const BFTSum = (root) => {

    if (root === null) return 0

    const queue = [root]
    let sum = 0

    while (queue.length > 0) {

        const node = queue.shift()
        sum += node.key

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return sum
}

const DFSSum = (root) => {

    if (root === null) return 0

    const stack = [root]
    let sum = 0

    while (stack.length > 0) {

        const node = stack.pop()
        sum += node.key

        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }
    return sum
}

// recursive

const recursive = (root) => {

    if (root === null) return 0

    return root.key + recursive(root.left) + recursive(root.right)
}