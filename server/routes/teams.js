const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const command = "SELECT * FROM teams";
    db.query(command).then(data => {
      const teamsArray = data.rows;
      const teamsObj = {};
      for (const e of teamsArray) {
        teamsObj[e.id] = e;
      }
      return res.json(teamsObj);
    });
  });
  return router;
};