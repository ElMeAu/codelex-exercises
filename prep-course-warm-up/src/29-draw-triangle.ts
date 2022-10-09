export {};

/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */

function draw(star: number) {
    
    for (let i = 1; i <= star; i++) {
        let str: string = ""
        for (let j=1; j<=i; j++) {
            str += "*"
        } 
        console.log(str);
    }
}


draw(3);
console.log("--")
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
