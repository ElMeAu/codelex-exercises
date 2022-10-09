/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {
    let revNumb: string = int
    .toString()
    .split("")
    .reverse()
    .join("");

    if(revNumb.indexOf("-") != -1) {
        revNumb = "-" + revNumb.replace("-","");
    }

    let revNumbInt: number = parseInt(revNumb);
    
    return revNumbInt

} 

export { reverse };
