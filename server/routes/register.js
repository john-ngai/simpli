const router = require('express').Router();
const services = require('../services');
const database = require('../database');

module.exports = (db) => {
  // GET /register
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command).then(data => {
      return res.json(data.rows);
    });
  });

  // PUT /register
  router.post('/', (req, res) => {
    const { name, email, password, team } = req.body;
    let team_id;
    // If the user exists, return an error.
    database.findUserByEmail(email)
      .then(data => {
        if (data) {
          res.send({ error: 'registered email' });
          return Promise.reject();
        }
      })
      .then(() => database.findTeamByCode(team))
      .then(data => {
        // If the team code doesn't exist, return an error,
        if (!data) {
          res.send({ error: 'invalid team' });
          return Promise.reject();
          // Otherwise, store the existing team id in a variable.
        } else {
          return data.id ? team_id = data.id : null;
        }
      })
      // Create and return a new team if the given team id value is null.
      .then(() => database.createTeam(team_id))
      .then(data => team_id = data.id)
      // Create a new user.
      .then(() => {
        const hashedPassword = services.hashPassword(password);
        database.createUser(name, email, hashedPassword, team_id)
      })
      // Create a JSON web token and attach it to the response.
      .then(() => {
        const user = { name, email, team_id };
        const accessToken = services.generateToken(user);
        user.accessToken = accessToken;
        res.send(user);
      });
  })

  return router;
};