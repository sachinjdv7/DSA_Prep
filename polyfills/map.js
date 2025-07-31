/**
 * map return new arr
 * takes userfn 
 * return new arr
 */

if (!Array.prototype.myMap) {

    Array.prototype.myMap = function (usrFn) {

        const result = []

        for (let i = 0; i < this.length; i++) {

            const value = usrFn(this[i], i)
            result.push(value)
        }
        return result
    }
}

const arr = [2, 3, 5]

const new1 = arr.myMap((val, index) => val * 2)
console.log(new1)
console.log(arr)