#!/usr/bin/node
// A script that prints the title of a Star Wars movie where the episode number matches a given integer.

const request = require('request');

const id = process.argv[2];
const base = 'https://swapi-api.hbtn.io/api/films/';
request.get(base + id, function (error, response, body) {
  if (!error) {
    console.log(JSON.parse(body).title);
  }
});
