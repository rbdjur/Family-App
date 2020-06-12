const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const app = express();

// local connection
// mongoose.connect('mongodb://localhost:27017/work', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(()=> {
//   console.log('connected to database');
// })
// .catch(() => {
//   console.log('connection failed');
// });

// Mongo Atlast (cloud hosting)
// 'mongodb+srv://Ronaldo:nalslvtTHEHvdJSW@cluster0-c2jqo.mongodb.net/node-angular?retryWrites=true&w=majority'
mongoose.connect('mongodb+srv://Ronaldo:nalslvtTHEHvdJSW@cluster0-c2jqo.mongodb.net/node-angular', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(()=> {
  console.log('connected to database');
})
.catch(() => {
  console.log('connection failed');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/", express.static(path.join(__dirname, "angular")));

app.use((req, res, next)=> {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
  next();
});

app.use("/api/posts",postRoutes);
app.use("/api/user",userRoutes);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"));
})

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


module.exports = app;
