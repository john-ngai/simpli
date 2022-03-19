const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command).then(data => {
      return res.json(data.rows);
    });
  });

  // PUT /users/:id
  router.put('/users/:id', (req, res) => {
    const { name, email, password, team_id } = req.body;
    const values = [name, email, password, team_id];
    const command = `
    INSERT INTO users (name, email, password, team_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `;
    return db.query(command, values)
      .then(data => res.send(data.rows[0]));
  })

  return router;
};