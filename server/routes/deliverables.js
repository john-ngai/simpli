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
  return router;
};