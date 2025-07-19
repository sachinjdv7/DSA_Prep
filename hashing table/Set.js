
let set = new Set();

set.add(10)
set.add(20)
set.add(30)
set.add(10)

console.log(set.size)
console.log(set.has(10))
console.log(set.delete(10))

// traversal

for (let ele of set) {
    console.log(ele)
}