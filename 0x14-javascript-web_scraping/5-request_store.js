#!/usr/bin/node
// A script that gets the contents of a webpage and stores it in a file.

const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const file = process.argv[3];
request.get(url, function (error, response, body) {
  if (!error) {
    fs.writeFileSync(file, body, 'utf-8');
  }
});
