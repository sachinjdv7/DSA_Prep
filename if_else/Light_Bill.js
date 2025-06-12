/**
 *  unit     price
 * ----      ------
 * upto 100   4/unit
 * 101  200   6/unit
 * 201  400   8/unit
 * more than  13/unit
 * 400
 * 
 * following bottom to up approach
 */

function calculateBill(unit) { //700
    let amount = 0
    if (unit > 400) {
        amount = (unit - 400) * 13
        unit = 400
    }
    if (unit > 200 && unit <= 400) {// 400
        amount += (unit - 200) * 8
        unit = 200
    }
    if (unit > 100 && unit <= 200) {// 400
        amount += (unit - 100) * 6
        unit = 100
    }

    return amount += unit * 4.2
}

console.log(calculateBill(401))