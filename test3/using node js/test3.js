const fs = require('fs');
const cheerio = require('cheerio');
const got = require('got');
const url = require("url");
const request = require("request");


const Urls = 'https://onfido.com/';

got(Urls).then(async response => {
  const $ = cheerio.load(response.body);
  let imageLength = $('img').length;
  let images = $('img');
  let dataImages = [];

  //Loop for check data src Extention and eliminate Base64
  for (i = 0; i < imageLength; i++) {
    let data = images[i].attribs.src
    let checkImageExtention = data.match(/\.\w{3,4}($|\?)/g);
    if (checkImageExtention != null) {
      dataImages.push(data);
    } else {
    }
  }
  for (i = 0; i < dataImages.length; i++) {
    let parser = new URL({ toString: () => 'https://' + dataImages[i] });
    let hostName = parser.hostname;
    let pathName = parser.pathname;
    if (hostName == 'static') {
      let imageFromStaticUrl = 'https://onfido.com/' + hostName + pathName;
      console.log(imageFromStaticUrl);
    } else {
      let imageFromExternalUrl = 'https://' + hostName + pathName;
      let res = await got(imageFromExternalUrl);
      request({
        url: imageFromExternalUrl,
        method: "HEAD"
      }, function (err, response, body) {
        console.log(response.headers['content-length']+' bytes', pathName);
      });
    }
  }


}).catch(err => {
  console.log(err);
});

// Its Using Node JS 
// Please run 'npm install'
// stary using 
// node test3.js