
function sum(a, b) {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b)
        }, 3000)
    })
}


console.log('starting....')
 sum(10, 20).then((res) => console.log(res))
