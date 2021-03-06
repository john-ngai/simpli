const router = require('express').Router();
const services = require('../services');
const formatData = require('../helpers/formatData');

module.exports = (db) => {
  // GET /deliverables
  router.get('/', (req, res) => {
    const token = req.headers['x-access-token'];
    // Respond with an empty object when no token is found.
    if (!token) {
      return res.send({});
    }
    // Respond with an empty object if the token verification fails.
    const user = services.verifyToken(token);
    if (!user) {
      return res.send({});
    }
    const { team_id } = user;
    const values = [team_id];
    const command = `
      SELECT deliverables.*, team_id, COUNT(tasks.id)
      FROM deliverables
        LEFT JOIN projects ON deliverables.project_id = projects.id
        LEFT JOIN tasks ON deliverables.id = deliverable_id
      WHERE team_id = $1
      GROUP BY deliverables.id, team_id;
    `;
    return db.query(command, values)
      .then(data => {
        const deliverables = data.rows;
        // Respond with an empty object if the query doesn't return any rows.
        if (deliverables.length === 0) {
          res.send({});
          // Respond with the correctly formatted data.
        } else {
          res.send(formatData(deliverables));
        }
      });
  });

  // PUT /deliverables/new
  router.put('/new', (req, res) => {
    const { name, description, priority, status, project_id } = req.body;
    const values = [name, description, priority, status, project_id];
    const command = `
    INSERT INTO deliverables (name, description, priority, status, completed_tasks, total_tasks, project_id)
    VALUES ($1, $2, $3, $4, 0, 0, $5)
    RETURNING *;
    `;
    return db.query(command, values)
      .then(data => res.send(data.rows[0]));
  });
  
  // PUT /deliverables/:id
  router.put('/:id', (req, res) => {
    const delID = req.params.id;
    const { name, description, priority, status, completed_tasks, total_tasks, project_id } = req.body;
    const values = [delID, name, description, priority, status, completed_tasks, total_tasks, project_id];
    const command = `
      UPDATE deliverables
      SET name = $2, description = $3, priority = $4, status = $5, completed_tasks = $6, total_tasks = $7, project_id = $8
      WHERE id = $1;  
    `;
    return db.query(command, values)
      .then(() => res.send())
      .catch(() => res.status(500).send());
  });

  // DELETE /deliverables/:id
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const values = [id];
    const command = `
      DELETE FROM deliverables
      WHERE id = $1;
    `;
    return db.query(command, values)
      .then(() => res.send())
      .catch(() => res.status(500).send());
  });

  return router;
};
