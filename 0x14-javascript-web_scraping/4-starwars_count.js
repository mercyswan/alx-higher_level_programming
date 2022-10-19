#!/usr/bin/node
// A script that prints the number of movies where the character “Wedge Antilles” is present.

const request = require('request');

let count = 0;
const url = process.argv[2];
request.get(url, function (error, response, body) {
  if (!error) {
    const data = JSON.parse(body);
    const movies = data.results;
    for (const movie of movies) {
      for (const character of movie.characters) {
        if (character.substr(-3) === '18/') {
          count += 1;
        }
      }
    }
    console.log(count);
  }
});
