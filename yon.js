const axios = require('axios');
const fs = require('fs');
const now = Date.now();
const andNow = Date.now() - now;
const inputs = process.argv;
const crawledPage = inputs[2];
let newRTFTitle;

console.log(` Present time at beginning: ${now}`);

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile('message.txt', data, (err) => {
//   if (err) throw err;
//   console.log(' The file has been saved!');
// });

console.log(` The input is an array: ${Array.isArray(inputs)} `);
console.log(` This is the argument array: ${inputs} `);
console.log(` This is the second argument: ${inputs[1]} `);
console.log(` This is the third argument: ${crawledPage} `);

axios({
    method:'get',
    url: crawledPage,
    responseType:'JSON'
    })
    .then(function(response) {
        console.log(`This is the response from axios: ${response.data}`);
    })
    .catch(function (error) {
        console.log(error);
});
console.log(` Time elapsed since beginning: ${andNow} `);


// receive some input url to scrape
// determine what job board the page is from, will have to be specific for dice, indeed, etc.
    // use a switch to call function specific to each board
    // function specific for each board that does the scrape

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
