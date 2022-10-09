export {};

function tidyUpString(str:string) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: Array<string>) {
  //return tidyUpString(str).toUpperCase()
   //return str.map(a: string => tidyUpString(a).toUpperCase());
   return str.map(function(val: string, index: number) {
    let tidyStr = tidyUpString(val);
    return tidyStr.charAt(0).toUpperCase() + tidyStr.slice(1);
   });

}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = capitalise(mentors); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
