console.log('inside check-auth.js');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    console.log('module.exports function of header authorization');
    const token = req.headers.authorization.split(" ")[1];
    console.log('token[1]', token);
    jwt.verify(token, "secret_longer");
    next();
  } catch (error) {
    res.status(401).json({
      message: "Auth failed for middleware protect routes."
    })
  }
}
