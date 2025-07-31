
if (!Array.prototype.myFilter) {

    Array.prototype.myFilter = function (userFn) {

        const result = [];

        for (let i = 0; i < this.length; i++) {

            if (userFn(this[i])) {
                result.push(this[i])
            }
        }
        return result;
    }
}

const arr = [1, 2, 3, 4]

const myFilterArr = arr.myFilter((val) => val % 2 === 0)

console.log(myFilterArr)