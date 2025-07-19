

function countFrequency(arr) {
    const map = new Map()

    for (let ele of arr) {

        if (map.has(ele)) {
            map.set(ele, map.get(ele) + 1)
        } else {
            map.set(ele, 1)
        }
    }
    return map
}



const arr = [10, 45, 18, 9, 9, 10, 45, 10, 10]

console.log(countFrequency(arr))