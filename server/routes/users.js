const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const command = "SELECT users.*, teams.name AS team_name, teams.code AS team_code FROM users JOIN teams ON teams.id = team_id";
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