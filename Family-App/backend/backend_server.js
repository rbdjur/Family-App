const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
// const mongojs = require('mongojs');
// const assert = require('assert');
const http = require('http');

const app = express();
app.use(bodyParser.json());

const url = 'mongodb://localhost:27017';
const dbName = 'work';
const collection_name = 'fam';
let db;
let collection;

// set Headers
app.use((req, res, next)=> {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
  next();
});

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},(err, client)=> {
  if (err){
    console.log('There is an error: ', err);
  } else {
    console.log('successful connection');
    db = client.db(dbName);
    collection = db.collection(collection_name);
  };
});

app.get('/square',(req, res, next) => {
  console.log('/square route');
  collection.find({}).toArray((err, docs)=> {
    if (err){
      res.send(err);
    } else {
      res.status(200).json({
        data: docs
      });
    }
  })
});

module.exports = app;
