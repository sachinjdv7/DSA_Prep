
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

// problem

const arr = [10, 45, 18, 9, 9, 10, 45, 10, 10]

let set1 = new Set();

for (let i = 0; i < arr.length; i++) {

    if (set1.has(arr[i])) {
        set1.delete(arr[i])
    } else {
        set1.add(arr[i])
    }
}
console.log(set1)

// remove duplicates

let set5 = new Set(arr)
console.log([...set5])




function reverseWordOrder(str) {

    return str.split(" ").reverse().join(" ")

}

console.log(reverseWordOrder("Hello World"))