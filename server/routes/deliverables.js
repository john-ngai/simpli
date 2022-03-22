const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const command = "SELECT deliverables.*, COUNT(tasks.id) FROM deliverables LEFT JOIN tasks ON deliverables.id = deliverable_id GROUP BY deliverables.id";
    db.query(command).then(data => {
      const deliverablesArray = data.rows;
      const deliverablesObj = {};
      for (const e of deliverablesArray) {
        deliverablesObj[e.id] = e;
      }
      return res.json(deliverablesObj);
    });
  });

  // PUT /deliverables/new
  router.put('/new', (req, res) => {
    const { name, description, priority, status, project_id } = req.body;
    const values = [name, description, priority, status, project_id];
    const command = `
      INSERT INTO deliverables (name, description, priority, status, project_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    return db.query(command, values)
      .then(data => res.send(data.rows[0]));
  });

  // PUT /deliverables/:id
  router.put('/:id', (req, res) => {
    const delID = req.params.id;
    const { priority } = req.body;
    const values = [delID, priority];
    const command = `
      UPDATE deliverables
      SET priority = $2
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
