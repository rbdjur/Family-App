const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const http = require('http');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Signup = require("./models/signup_credentials");
const Credentials = require('./models/login_credentials');
const Fam = require('./models/family_data');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
const checkAuth = require('./middleware/check-auth');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost:27017/work', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(()=> {
  console.log('connected to database');
})
.catch(() => {
  console.log('connection failed');
});

app.use((req, res, next)=> {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
  next();
});

app.use('/api/posts',postRoutes);
app.use('/api/user',userRoutes);


// app.get('/api/square', checkAuth,(req,res,next)=> {
//   console.log('\"get \" square pathway');
//   console.log('req.body: ', req.body);
//     Fam.find()
//   .then((docs) => {
//     console.log('retrieve all data', docs);
//     res.status(200).json({
//       data: docs
//     });
//   });
// });

// app.get('/api/square',(req,res,next)=> {
//   console.log('\"get \" square pathway');
//     Fam.find()
//   .then((docs) => {
//     console.log('retrieve all data', docs);
//     res.status(200).json({
//       data: docs
//     });
//   });
// });

// app.post('/api/signup', (req, res, next) => {
// console.log('reached router.post("/signup")');
//   bcrypt.hash(req.body.password, 10)
//   .then(hash=> {
//   console.log('handling brcypt hash: ', hash);
//     const newUser = new Signup({
//       email: req.body.email,
//       password: hash
//     });
//     console.log('newUser', newUser);
//     newUser.save()
//     .then(result => {
//       res.status(201).json({
//         message: '/api/signup route works + new member added',
//         result: result
//       });
//     })
//     .catch(err => {
//       res.status(500).json({
//         error: err
//       })
//     })
//   });
// });



module.exports = app;
