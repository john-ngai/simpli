const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const command = "SELECT * FROM tasks";
    db.query(command).then(data => {
      const tasksArray = data.rows;
      const tasksObj = {};
      for (const e of tasksArray) {
        tasksObj[e.id] = e;
      }
      return res.json(tasksObj);
    });

    router.put('/:id', (req, res) => {
      // console.log("Success inside PUT task/:id");
      const taskID = req.params.id;
      const { priority } = req.body;
      // console.log("TaskID:", taskID, "priority", priority);
      const values = [taskID, priority];
      const command = `
      UPDATE tasks
      SET priority = $2
      WHERE id = $1;
      `;
      return db.query(command, values)
        .then(data => {
          console.log("success??", data);
          // res.send(data.rows[0]);
          res.send();
        })
        .catch(err => console.log(err));
    })
  });

  // PUT /tasks/new
  router.put('/new', (req, res) => {
    const { name, description, priority, status, deliverable_id } = req.body;
    const values = [name, description, priority, status, deliverable_id];
    const command = `
      INSERT INTO tasks (name, description, priority, status, deliverable_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    return db.query(command, values)
      .then(data => res.send(data.rows[0]));
  });
  return router;
};