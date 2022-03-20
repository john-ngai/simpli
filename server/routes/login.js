const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    // WILL NEED TO UPDATE WITH COOKIES LATER 
    const { email } = req.body;
    const values = [email];
    const command = "SELECT * FROM users WHERE email = $1";
    db.query(command, values)
      .then(data => res.send(data.rows[0]))
      .catch(err => console.log(err));
  });
  return router;
};