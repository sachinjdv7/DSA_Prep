
/* 
 Switch:-
 ------

 1. switch takes only constant value when checking
 2. if we have one condition and have multiple execution then 
    we use switch
3. if we forget to write break then we will get fall through condition
4. we can not allowed to check condition in switch case

*/

let num = 5

switch (num) {
    case 1: {
        console.log("sunday")
        break
    };

    default: console.log('invalid ')
}

switch (num) {
    case 1: {
        console.log("wow")
        break
    };

    default: console.log('wo ')
}

// inside switch when we case we can have conditions