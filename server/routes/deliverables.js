const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const command = "SELECT deliverables.*, COUNT(tasks.id) FROM deliverables JOIN tasks ON deliverables.id = deliverable_id GROUP BY deliverables.id";
    db.query(command).then(data => {
      return res.json(data.rows);
    });
  });
  return router;
};