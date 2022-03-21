const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command).then(data => {
      const usersArray = data.rows;
      const usersObj = {};
      for (const e of usersArray) {
        usersObj[e.id] = e;
      }
      return res.json(usersObj);
    });
  });
  return router;
};