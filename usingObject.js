// using object 

function countFrequency(arr) {

    const obj = {};

    for (let element of arr) {

        if (obj[element]) {

            obj[element]++

        } else {

            obj[element] = 1
        }
    }

    return obj;
}

// usage
console.log(countFrequency([1, 1, 2, 3, 4, 3, 5, 6]))