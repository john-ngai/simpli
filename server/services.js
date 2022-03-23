// Dependencies
const bcrypt = require('bcrypt');

const hashPassword = password => bcrypt.hashSync(password, 10);
exports.hashPassword = hashPassword;

const checkPassword = (input, hash) => {
  return bcrypt.compareSync(input, hash);
}
exports.checkPassword = checkPassword;

const message = () => console.log('Hello World!');
exports.message = message;
