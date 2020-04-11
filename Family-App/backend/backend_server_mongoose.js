const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const http = require('http');

const User_Signedup = require("./models/signup_credentials");
const Credentials = require('./models/login_credentials');
const Fam = require('./models/family_data');
const userRoutes = require('./routes/user');

const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const url = 'mongodb://localhost:27017';
const dbName = 'work';
const collection_name = 'fam';

mongoose.connect('mongodb://localhost:27017/work', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(()=> {
  console.log('connected to database, yer!');
})
.catch(() => {
  console.log('connection failed');
});

// set Headers
app.use((req, res, next)=> {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
  next();
});

app.get('/square', (req, res, next) => {
  console.log('\"get \" hit square pathway');
  Fam.find()
  .then((docs) => {
    console.log('retrieve all data', docs);
    res.status(200).json({
      data: docs
    });
  });
})


// router.post('/login', (req, res, next) => {
//   console.log('POST - /login - user.js');
//   res.status(200).json({
//     message: 'POST - /login - user.js'
//   });
// })
app.get('/square', userRoutes);
app.post('/signup', userRoutes);
app.post('/login', userRoutes);



module.exports = app;
