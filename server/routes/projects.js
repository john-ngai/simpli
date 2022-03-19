const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const command = "SELECT * FROM projects";
    db.query(command).then(data => {
      return res.json(data.rows);
    });
  });

  router.put('/test', (req, res) => {
    console.log('Success - Inside PUT /projects');
  })

  return router;
};