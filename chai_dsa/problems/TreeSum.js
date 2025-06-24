
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