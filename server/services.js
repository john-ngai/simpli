// Dependencies
const bcrypt = require('bcrypt');

// Return an encrypted password.
const hashPassword = password => bcrypt.hashSync(password, 10);
exports.hashPassword = hashPassword;

// Check if an unencrypted and encrypted password are a match.
const checkPassword = (input, hash) => {
  return bcrypt.compareSync(input, hash);
}
exports.checkPassword = checkPassword;

const message = () => console.log('Hello World!');
exports.message = message;
