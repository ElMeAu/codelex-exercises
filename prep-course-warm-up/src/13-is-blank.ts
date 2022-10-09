export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */
 function isBlank(a:string | null | undefined) {
    if(!a || a.length == 0 || a === " ") {
        return true;
    }

    return false;

    //return !a || a.length == 0 || a === " ";
 }

console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false


//return !input || input.trim() === ""