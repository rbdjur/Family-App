console.log('inside check-auth.js');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    // console.log('token[1]', token);
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    // secret_longer
    req.userData = {email: decodedToken.email, userId: decodedToken.userId}
    next();
  } catch (error) {
    // console.log('error', error);
    res.status(401).json({
      message: "You are not authenticated",
      err: error
    })
  }
}
