const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const command = "SELECT * FROM projects";
    db.query(command).then(data => {
      return res.json(data.rows);
    });
  });

  router.put('/new', (req, res) => {
    console.log('req.body =', req.body);
  })

  return router;
};