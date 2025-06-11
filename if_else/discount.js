
function calculateDiscountAmount(amount, discount) {

    if (amount > 0 && amount <= 5000) {
        return amount - Math.floor((amount * discount) / 100)
    } else if (amount > 5000 && amount <= 7000) {
        return amount - Math.floor((amount * discount) / 100)
    } else if (amount > 7000 && amount <= 9000) {
        return amount - Math.floor((amount * discount) / 100)
    } else if (amount > 9000) {
        return amount - Math.floor((amount * discount) / 100)
    } else {
        throw new Error("Give valid input")
    }

}

console.log(calculateDiscountAmount(5005, 5))


// other way

function calculateDiscountAmount(amount) {
    if (typeof amount !== "number" || amount <= 0) {
        throw new Error("Invalid amount. Must be a positive number.");
    }

    let discount;
    if (amount <= 5000) {
        discount = 5;
    } else if (amount <= 7000) {
        discount = 10;
    } else if (amount <= 9000) {
        discount = 15;
    } else {
        discount = 20;
    }

    const discountAmount = Math.floor((amount * discount) / 100);
    const payableAmount = amount - discountAmount;

    return payableAmount;
}

console.log(calculateDiscountAmount(5005));  // 4504 (with 10% discount)


// other way

function calculateDiscountAmount(amount, discount) {
    // Basic input validation
    if (typeof amount !== "number" || amount <= 0) {
        throw new Error("Invalid amount. Must be a positive number.");
    }

    if (typeof discount !== "number" || discount < 0 || discount > 100) {
        throw new Error("Invalid discount. Must be between 0 and 100.");
    }

    // Calculate discount
    const discountAmount = Math.floor((amount * discount) / 100);
    const payableAmount = amount - discountAmount;

    return payableAmount;
}

// Example usage
console.log(calculateDiscountAmount(5005, 5));  // 4755


// best ways

function getDiscount(amount) {
    if (amount <= 5000) return 5;
    if (amount <= 7000) return 10;
    if (amount <= 9000) return 15;
    return 20;
}

function calculateDiscountAmount(amount) {
    if (typeof amount !== "number" || amount <= 0) {
        throw new Error("Invalid amount. Must be a positive number.");
    }

    const discount = getDiscount(amount);
    const discountAmount = Math.floor((amount * discount) / 100);

    return amount - discountAmount;
}

console.log(calculateDiscountAmount(5005)); // 10% discount


