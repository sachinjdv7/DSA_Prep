
const graphs = {

    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
}

function depthFSIterative(graphs, start) {
    const stack = [start] // put starting friend in backpack
    const visited = new Set() // empty notebook

    while (stack.length > 0) {  // as long as backpack isn’t empty
        const node = stack.pop() // take last friend out of backpack

        if (!visited.has(node)) { // check notebook
            visited.add(node)     // write name in notebook

            for (const neighbour of graphs[node]) { // check this friend’s friends
                if (!visited.has(neighbour)) {
                    stack.push(neighbour) // add them to backpack
                }
            }
        }
    }
}
