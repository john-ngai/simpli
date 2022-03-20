const router = require('express').Router();

module.exports = (db) => {
  // GET /projects
  router.get('/', (req, res) => {
    const command = "SELECT projects.*, COUNT(deliverables.id) FROM projects LEFT JOIN deliverables ON projects.id = project_id GROUP BY projects.id";
    db.query(command).then(data => {
      return res.json(data.rows);
    });
  });

  // PUT /projects/new
  router.put('/new', (req, res) => {
    const { name, description, team_id } = req.body;
    const values = [name, description, team_id];
    const command = `
      INSERT INTO projects (name, description, team_id)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    return db.query(command, values)
      .then(data => res.send(data.rows[0]));
  });

  return router;
};
