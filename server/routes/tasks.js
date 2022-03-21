const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const command = "SELECT * FROM tasks";
    db.query(command).then(data => {
      return res.json(data.rows);
    });
  });

  // PUT /tasks/new
  router.put('/new', (req, res) => {
    const { name, description, priority, status, deliverable_id } = req.body;
    const values = [name, description, priority, status, deliverable_id];
    const command = `
      INSERT INTO tasks (name, description, priority, status, deliverable_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    return db.query(command, values)
      .then(data => res.send(data.rows[0]));
  });
  return router;
};