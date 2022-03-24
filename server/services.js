// Dependencies
require('dotenv').config()
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

// Return an encrypted password.
const hashPassword = password => bcrypt.hashSync(password, 10);
exports.hashPassword = hashPassword;

// Check if an unencrypted and encrypted password are a match.
const checkPassword = (input, hash) => {
  return bcrypt.compareSync(input, hash);
}
exports.checkPassword = checkPassword;

// Generate a 24 hr JSON web token.
const generateToken = data => {
  const secret = process.env.JWT_SECRET;
  return jwt.sign(data, secret, { expiresIn: 86400 });
};
exports.generateToken = generateToken;

// If verified, return token data, otherwise return null.
const verifyToken = token => {
  const secret = process.env.JWT_SECRET;
  let data;
  jwt.verify(token, secret, (err, decoded) => {
    err? null : data = decoded;
  });
  return data;
}
exports.verifyToken = verifyToken;
