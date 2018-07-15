const express = require('express');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const db = low(adapter);

var restapi = express();

restapi.get('/', function(req, res) {
  console.log('Serving testdata...');
  res.json({ foo: 'var' });
});

restapi.get('/models', function(req, res) {
  console.log('Serving list of models...');
  res.json(db.get('models'));
});

restapi.get('/ideas', function(req, res) {
  console.log('Serving list of ideas...');
  res.json(db.get('ideas'));
});

restapi.get('/contracts', function(req, res) {
  console.log('Serving list of contracts...');
  res.json(db.get('contracts'));
});

restapi.get('/contracttypes', function(req, res) {
  console.log('Serving list of contract types...');
  res.json(db.get('contracttypes'));
});

restapi.listen(8000);

console.log('Server running...');
