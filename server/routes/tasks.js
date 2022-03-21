const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const command = "SELECT * FROM tasks";
    db.query(command).then(data => {
      return res.json(data.rows);
    });

    router.put('/:id', (req, res) => {
      const taskID = req.params.id;
      const { priority } = req.body;
      const values = [taskID, priority];
      const command = `
      UPDATE tasks
      SET priority = $2
      WHERE id = $1;
      `;
      return db.query(command, values)
        .then(data => res.send(data.rows[0]))
        .catch(err => console.log(err));
    })
  });
  return router;
};