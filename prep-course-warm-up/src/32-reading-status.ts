export {};

const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

const showStatus = (list: Array<{title:string,author:string,isRead:boolean}> ) => {
  for (let i=0; i<list.length; i++)
    if(list[i].isRead === true) {
      console.log(`Already read ${list[i].title}+ by ${list[i].author}.`)
    } else {
      console.log(`You still need to read ${list[i].title} by ${list[i].author}.`)
    }
};

showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/