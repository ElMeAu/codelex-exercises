export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com


function protectEmail(email:string){
    let endEmail = email.indexOf("@") 
    let startEmail = 3; 

    if (endEmail>6) {
        startEmail = 3;
    } else {
        startEmail = endEmail - 3;
    }
    return email.substring(0, startEmail) + "..." + email.substring(endEmail, email.length)
} 