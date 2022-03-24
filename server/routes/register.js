const router = require('express').Router();
const services = require('../services');

module.exports = (db) => {
  // GET /register
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command).then(data => {
      return res.json(data.rows);
    });
  });

  // PUT /register
  router.put('/', (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = services.hashPassword(password);
    const values = [name, email, hashedPassword, 1];
    const command = `
    INSERT INTO users (name, email, password, team_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `;
    return db.query(command, values)
      .then(data => res.send(data.rows[0]))
      .catch(err => console.log(err));
  })

  return router;
};