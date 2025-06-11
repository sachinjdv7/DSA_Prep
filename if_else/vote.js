// if voter is more than 18 then true false


function voteEligible(age) {

    // voter greater than 0 less than 18 => not valid
    // voter 18 greater than 18 then => valid
    // vote 0 => not valid age
    // if user gives string => handle isNan => not valid input
    // handle undefinded and nulll as well

    if (age === undefined || age === null) {
        console.log("Invalid input: age is not provided");
        return;
    }
    if (isNaN(age)) {
        console.log("give proper input")
        return
    }
    if (age >= 18) {
        console.log("valid for the age")
    } else {
        console.log("not valid")
    }
}

voteEligible("5")