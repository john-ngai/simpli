const router = require('express').Router();
const services = require('../services');

module.exports = (db) => {

  // POST /login
  router.post('/', (req, res) => {
    const { email, password } = req.body;
    values = [email];
    command = `
      SELECT * FROM users
      WHERE email = $1;
    `;
    db.query(command, values)
      // If the user is found,
      .then(data => {
        const hash = data.rows[0].password;
        // If the passwords match,
        if (services.checkPassword(password, hash)) {
          const { name, email, team_id } = data.rows[0];
          const user = { name, email, team_id };
          const accessToken = services.generateToken(user);
          user.accessToken = accessToken;
          // Respond with a generated JSON web token.
          res.send(user);
        // If the passwords do not match,
        } else {
          // Respond without any data.
          res.send();
        }
      })
      // If the user is not found, respond with an error code 500.
      .catch(() => res.status(500).send());
  })

  return router;
};
