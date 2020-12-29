const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Signup = require("../models/signup_credentials");

exports.createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash=> {
    // console.log('handling brcypt hash: ', hash);
      const newUser = new Signup({
        email: req.body.email,
        password: hash
      });
      // console.log('newUser', newUser);
      newUser.save()
      .then(result => {
        res.status(201).json({
          message: '/api/signup route works + new member added',
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
            message: 'Invalid authentication credentials'})
      })
    });
  }

  exports.userLogin = (req, res, next) => {
    // console.log('email', req.body.email);
    let fetchedUser;
    Signup.findOne({
      email: req.body.email
    })
    .then(user => {
      // console.log('user', user);
        if(!user) {
          return res.status(401).json({
            message:"email/username does not match."
          });
        }
      fetchedUser = user;
      // console.log('fetchedUser: ', fetchedUser);
      return bcrypt.compare(req.body.password, fetchedUser.password);
    })
      .then(result => {
      // console.log('return bcrypt', result);
      if(!result) {
        return res.status(401).json({
          message:"Error"
        });
      }
      const token = jwt.sign({
        email: fetchedUser.email,
        userId: fetchedUser._id
      }, process.env.JWT_KEY, {expiresIn: '1h'}
      );
      // secret_longer
      console.log('jwt sign - const token', token);
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id
      });
    })
    .catch(err => {
        return res.status(401).json({
          message:"Invalid Authentication credentials"
        });
    });
  }
