const fs = require('fs');
const now = Date.now();
const andNow = Date.now() - now;
console.log(now);

const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});




console.log(`${andNow}`);

