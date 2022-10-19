#!/usr/bin/node
// A script that display the status code of a GET request.

const request = require('request');

request.get(process.argv[2], function (error, response) {
  if (!error) {
    console.log('code:', response.statusCode);
  }
});
