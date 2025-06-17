function check(input) {
    if (typeof input !== "string" || input.trim() === "") {
        throw new Error("give me a non-empty string");
    }
    console.log("[check] returning:", input);
    return input;
}

// We use check() even when something is passed
function isPalindrom(str = check()) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}


console.log("Result:", isPalindrom(check("madam")));
