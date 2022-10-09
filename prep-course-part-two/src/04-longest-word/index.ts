/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {
    let str: string[] = sen.replace(/[^a-zA-Z\s]/g,'').split(" ");
    let longest: number = 0
    let longestStr: string= ""
    for (let i = 0; i<str.length; i++){
        if( longest<str[i].length){
            longest=str[i].length;
            longestStr= str[i]
        }
    } return longestStr
    }


export { longestWord };
