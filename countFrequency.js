// using map 

function countFrequency(arr) {

    const map = new Map();

    for (let element of arr) {

        if (map.has(element)) {

            map.set(element, map.get(element) + 1)

        } else {

            map.set(element, 1)

        }
    }

    return map;
}

// usage
console.log(countFrequency([1, 1, 2, 3, 4, 3, 5, 6]))