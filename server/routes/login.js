const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const { email, password } = req.body;
    const command = "SELECT * FROM users";
    db.query(command).then(data => {
      return res.json(data.rows);
    });
  });
  return router;
};