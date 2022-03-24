const router = require('express').Router();
const formatData = require('../helpers/formatData');
const services = require('../services');

module.exports = (db) => {
  // GET /projects
  router.get('/', (req, res) => {
    const command = `
      SELECT projects.*, COUNT(deliverables.id) AS count
      FROM projects
      LEFT JOIN deliverables ON projects.id = project_id
      GROUP BY projects.id;
    `;
    db.query(command)
      .then(data => {
        const projectsArray = data.rows;
        const projectsObj = {};
        for (const e of projectsArray) {
          projectsObj[e.id] = e;
        }
        return res.json(projectsObj);
      });
  });

  // GET /projects/auth
  router.get('/auth', (req, res) => {
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
        const projects = data.rows
        // Respond with an empty object if the query doesn't return any rows.
        if (projects.length === 0) {
          res.send({});
        // Respond with the correctly formatted data.
        } else {
          res.send(formatData(projects));
        }
      })
  })

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

  // PUT /projects/:id
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { name, description, team_id } = req.body;
    const values = [name, description, team_id, id];
    const command = `
      UPDATE projects
      SET name = $1, description = $2, team_id = $3
      WHERE id = $4;
    `;
    return db.query(command, values)
      .then(() => res.send())
      .catch(() => res.status(500).send());
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
