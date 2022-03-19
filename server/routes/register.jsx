const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command).then(data => {
      return res.json(data.rows);
    });
  });

  // PUT /users/:id
  router.put('/users/:id', (req, res) => {

  })

  return router;
};