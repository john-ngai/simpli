const router = require('express').Router();

module.exports = (db) => {
  // GET /days
  router.get('/', (req, res) => {
    const command = `
      SELECT * FROM days;
    `;
    db.query(command)
      .then(data => res.send(data.rows));
  });

  return router;
};