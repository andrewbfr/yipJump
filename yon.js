const fs = require('fs');
const now = Date.now();
const andNow = Date.now() - now;
console.log(` Present time at beginning: ${now}`);

const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log(' The file has been saved!');
});

console.log(` Present time at Completion: ${andNow}`);

console.log(` This is the second argument: ${process.argv[1]}`);

// receive some input url to scrape

// determine what job board the page is from, will have to be specific for dice, indeed, etc.


// scrape page for relevant data: divs, links, etc.

// parse the relevant data into an object
    //relevant data: 
    /* 
    job title
    job id number
    job posting url
    job description
    */

// write this info as a JSON or some format, into a new file with unique name
