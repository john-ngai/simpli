const router = require('express').Router();

module.exports = (db) => {
  
  const token = req.headers['x-access-token'];

  // if no token is found, return an empty object
  if (!token) {
    return res.send({});
  }

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