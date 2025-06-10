/** 
1. loop through the string 
2. get number into the string by +=2
3. get char using input[i+1]
4. create bar based on the count (use repeat method)
5. return res with concate char and bar
*/



function barContString(input) {

    let res = ''
    for (let i = 0; i < input.length; i += 2) {
        const countOfPipe = input[i]
        const chars = input[i + 1] ?? ""
        const pipes = '|'.repeat(countOfPipe)

        res += `${pipes}${chars}`
    }

    return res

}

console.log(barContString('1a2b3'))