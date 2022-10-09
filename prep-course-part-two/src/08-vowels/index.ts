/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
    let vowels = ["a", "e", "i", "o", "u"]
    let vow = s.split("");


    let count = 0;
    for (let i = 0; i < vow.length; i++ ) {
        if ( vowels.includes(vow[i].toLowerCase() )) {
            count+=1;
        }
    }

    return count

}

export { vowels };
