const express = require('express');
const router = express.Router();
const User_Signedup = require("../models/signup_credentials");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.use((req, res, next)=> {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
  next();
});

router.post('/signup', (req, res, next) => {
console.log('reached router.post("/signup")');
  bcrypt.hash(req.body.password, 10)
  .then(hash=> {
  console.log('handling brcypt hash');
    const newUser = new User_Signedup({
      first: req.body.first,
      last: req.body.last,
      email: req.body.email,
      password: hash
    });
    newUser.save()
    .then(result=>{
  console.log('asynchronous handling of adding user to database', result);
      res.status(201).json({
        message: 'new member added',
        result: result
      });
    })
    .catch(err => {
      res.status(400).json({
        error: err
      });
    });
  });
  // next();
  // having the next() creates an error, investigate
});

// router.post('/login', (req, res, next) => {
//   console.log('POST - /login - user.js');
//   res.status(200).json({
//     message: 'POST - /login - user.js'
//   });
// });


router.post('/login', (req, res, next) => {
  console.log('POST - /login - user.js');
  // console.log('req.body.user', req.body.username);
  // console.log('req.body.password', req.body.password);

  let fetchedUser;
  User_Signedup.findOne({
    email: req.body.username
  })
  .then(user => {
    console.log('user', user);
    // console.log('user.email/username', user.username);
    console.log('user.password', user.password);
    if(!user) {
      return res.status(401).json({
        message:"BAD 1"
      });
    }
    fetchedUser = user;
    console.log('fetchedUser', fetchedUser);
    return bcrypt.compare(req.body.password, fetchedUser.password);
  })
  .then(result => {
    console.log('result', result);
    if(!result) {
      return res.status(401).json({
        message:"BAD 2"
      });
    }
    const token = jwt.sign({
      email: fetchedUser.email,
      userId: fetchedUser._id
    }, 'secret_longer', {expiresIn: '1hr'}
    );
    res.status(200).json({
      token: token
    })
  })
  .catch(err => {
      return res.status(401).json({
        message:"BAD 3"
      });
  });
});

// router.post('/login', (req, res, next) => {
//   console.log('POST - /login');
//   // console.log('req.body', req.body.username);
//   let fetchedUser;
//   User_Signedup.find({
//     // email: req.body.email
//     email: req.body.username
//   })
//   .then(user => {
//     console.log('user', user);
//     if(!user) {
//       return res.status(404).json({
//         message: 'BAD'
//       });
//     }
//     fetchedUser = user;
//     console.log('fetchedUser', fetchedUser);
//     return bcrypt.compare(req.body.password, fetchedUser.password);
//   })
//     .then(result =>{
//       console.log('result', result);
//       if(!result) {
//         return res.status(404).json({
//           message: 'bad'
//         })
//       }
//       const token = jwt.sign({
//         email: fetchedUser.username,
//         userId : fetchedUser._id },
//         'secret_should_be_longer',
//         { expiresIn: '1h'}
//       );
//       console.log('token before res.json', token);
//       res.status(200).json({
//         token: token
//       })
//     })
//     .catch(err => {
//       if(err){
//         return res.status(404).json({
//           message: 'SMH'
//         })
//       }
//     })
//   })
// })

module.exports = router;
