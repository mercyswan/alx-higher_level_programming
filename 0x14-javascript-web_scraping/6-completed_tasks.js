#!/usr/bin/node
// A script that computes the number of tasks completed by user id.

const request = require('request');

const result = {};
const api = process.argv[2];
request.get(api, function (error, response, body) {
  if (!error) {
    const todos = JSON.parse(body);
    for (const todo of todos) {
      const id = todo.userId;
      if (result[id] === undefined) {
        result[id] = 0;
      }
      if (todo.completed) {
        result[id] += 1;
      }
      if (result[id] === 0) {
        delete result[id];
      }
    }
    console.log(result);
  }
});
