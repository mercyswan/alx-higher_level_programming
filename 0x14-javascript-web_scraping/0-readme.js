#!/usr/bin/node
// A script that reads and prints the content of a file.

const fs = require('fs');

const file = process.argv[2];
fs.readFile(file, 'utf-8', function (error, data) {
  if (!error) {
    console.log(data);
  } else {
    console.log(error);
  }
});
