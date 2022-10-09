export {};

/**
 * Loop over the array and for each alive writer print out the following:
 * "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
 */

const writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }
];

function hello(intro: Array<{firstName:string,lastName:string,occupation:string,age:number, alive:boolean}>) {
  for (let i=0; i<intro.length; i++)
    if(intro[i].alive === true) {
      console.log(`Hi, my name is ${intro[i].firstName} + ${intro[i].lastName}. I am ${intro[i].age} years old, and work as a ${intro[i].occupation}.`)
    }
}

hello(writers)

  

