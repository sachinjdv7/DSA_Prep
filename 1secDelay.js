
function oneSecDelay(number) {

    for (let i = 1; i <= number; i++) {

        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
}

oneSecDelay(5)