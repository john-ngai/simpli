const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.post('/', (req, res) => {
    const { email, password } = req.body;
    const values = [email, password];
    const command = `
      SELECT * FROM users
      WHERE email = 'rick.sandchez@gmail.com';
    `;

    return db.query(command, values)
      .then(data => res.send(data.rows[0]))
      .catch(err => res.send(err));
  });
  
  return router;
};