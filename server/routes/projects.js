const { Router } = require('express');

const router = require('express').Router();

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
