const router = require('express').Router();
const services = require('../services');
const formatData = require('../helpers/formatData');

module.exports = (db) => {
  // GET /projects
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
      SELECT projects.*, COUNT(deliverables.id) AS count
      FROM projects
        LEFT JOIN deliverables ON projects.id = project_id
      WHERE team_id = $1
      GROUP BY projects.id;
    `;
    return db.query(command, values)
      .then(data => {
        const projects = data.rows;
        // Respond with an empty object if the query doesn't return any rows.
        if (projects.length === 0) {
          res.send({});
          // Respond with the correctly formatted data.
        } else {
          res.send(formatData(projects));
        }
      });
  })

  // PUT /projects
  router.put('/', (req, res) => {
    const token = req.headers['x-access-token'];
    // Respond with a 401 unauthorized status code if no token is sent.
    if (!token) {
      return res.status(401).send();
    }
    // Respond with a 401 unauthorized status code if the token verification fails.
    const user = services.verifyToken(token);
    if (!user) {
      return res.status(401).send();
    }
    const { team_id } = user;
    const { name, description } = req.body;
    const values = [name, description, team_id];
    const command = `
      INSERT INTO projects (name, description, team_id)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    return db.query(command, values)
      .then(data => res.send(data.rows[0]));
  });

  // PUT /projects/:id
  router.put('/:id', (req, res) => {
    const token = req.headers['x-access-token'];
    // Respond with a 401 unauthorized status code if no token is sent.
    if (!token) {
      return res.status(401).send();
    }
    // Respond with a 401 unauthorized status code if the token verification fails.
    const user = services.verifyToken(token);
    if (!user) {
      return res.status(401).send();
    }
    const { team_id } = user;
    const id = req.params.id;
    const { name, description } = req.body;
    const values = [name, description, team_id, id];
    const command = `
      UPDATE projects
      SET name = $1, description = $2, team_id = $3
      WHERE id = $4
      RETURNING *;
    `;
    return db.query(command, values)
      .then(data => res.send(data.rows[0]));
  });

  // DELETE /projects/:id
  router.delete('/:id', (req, res) => {
    const project_id = req.params.id;
    const values = [project_id];
    const command = `
      DELETE FROM projects
      WHERE id = $1;
    `;
    return db.query(command, values)
      .then(() => res.send())
      .catch(() => res.status(500).send());
  });

  return router;
};
