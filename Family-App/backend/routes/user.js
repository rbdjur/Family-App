const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const Signup = require("../models/signup_credentials");
// const Fam = require('../models/family_data');
// const Post = require('../models/post')
// const checkAuth = require('../middleware/check-auth');
const UserController = require("../controllers/user");

router.post('/signup', UserController.createUser);
router.post('/login', UserController.userLogin);

module.exports = router;
