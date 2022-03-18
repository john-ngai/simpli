const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const command = "SELECT * FROM deliverables";
    db.query(command).then(data => {
      return res.json(data.rows);
    });
  });
  return router;
};