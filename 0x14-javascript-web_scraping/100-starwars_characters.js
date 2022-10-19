#!/usr/bin/node
// A script that prints all characters of a Star Wars movie

const request = require('request');

const movie = process.argv[2];
const api = 'https://swapi-api.hbtn.io/api/';
const url = api + 'films/' + movie + '/';
request.get({ url: url }, function (error, response, body) {
  if (!error) {
    const characters = (JSON.parse(body)).characters;
    for (const character of characters) {
      request.get({ url: character }, function (error, response, body) {
        if (!error) {
          process.stdout.write(((JSON.parse(body)).name) + '\n');
        }
      });
    }
  }
});
