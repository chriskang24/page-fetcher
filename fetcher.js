const request = require('request');
const fs = require('fs');
const args = process.argv;


request(args[2], (error, response, body) => {
  fs.writeFile(args[3], body, error => {
    if (error) {
      return console.error(error);
    }
    if (body) {
      // console.log(body);
      return console.log(`Downloaded and saved ${body.length} bytes to ${args[3]}`);
    }
  })
});