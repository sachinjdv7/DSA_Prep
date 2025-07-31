



if (!Array.prototype.myForEach) {

    Array.prototype.myForEach = function (userFn) {

        const originArr = this;

        for (let i = 0; i < originArr.length; i++) {
            userFn(originArr[i], i)
        }
    }
}

const arr = [1, 2, 3]


arr.myForEach(function (value, index) {
    console.log(`arr value is ${value} and index ${index}`)
})
