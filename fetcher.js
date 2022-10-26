//Fetcher downloads the resource at the given URL to the local path on your machine
//and returns and message containing where it downloaded to and the size of the file.

const request = require('request');
const fs = require('fs')
const URL = process.argv[2]
const filePath = process.argv[3]


const fetcher = (url, localFilePath ) => {

  request(url, function (error1, response, body) {

    if (error1){ return console.error('error:', error1); // Print the error if one occurred
    }; 
  
    fs.writeFile(localFilePath, body, (error2) => { //Writes Body to localFilePath
      if (error2) return console.log(error2)        //returns error if occurs
    });
  
  
    console.log(`COMPLETED - Downloaded ${URL} and saved ${body.length} bytes to ${localFilePath}`);

  });
};

fetcher(URL, filePath)