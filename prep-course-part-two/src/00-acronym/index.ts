/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input:string) {
   const acro:string = input
   .replaceAll("-"," ")
   .replaceAll("_","")
   .split(' ')
   .map(
        input => input.charAt(0).toUpperCase()
    )
   .join('')

   console.log(acro);

   return acro;
}

//parse("Portable Network Graphics");

export { parse };
