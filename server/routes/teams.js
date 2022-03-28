const formatData = require('../helpers/formatData');

const router = require('express').Router();

module.exports = (db) => {

  router.get('/', (req, res) => {

  const token = req.headers['x-access-token'];

  // if no token is found, return an empty object
  if (!token) {
    return res.send({});
  }

  // Return an empty object is token verification fails
  const user = services.verifyToken(token);
  if (!user) {
    return res.send({});
  }


    const command = "SELECT * FROM teams";
    db.query(command).then(data => {
      const teamsArray = data.rows;
      const teamsObj = {};
      for (const e of teamsArray) {
        teamsObj[e.id] = e;
      }
      // return res.json(teamsObj);
      return res.send(formatData(teamsObj))
    });
  });
  return router;
};