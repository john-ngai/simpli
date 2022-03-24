const router = require('express').Router();
const services = require('../services');
const formatData = require('../helpers/formatData');

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

    // Update task's complete & priority value
    router.put('/:id', (req, res) => {
      const taskID = req.params.id;
      const { name, description, priority, status, deliverable_id } = req.body;

      const values = [taskID, name, description, priority, status, deliverable_id];
      const command = `
      UPDATE tasks
      SET name= $2, description=$3, priority = $4, status = $5, deliverable_id=$6 
      WHERE id = $1;
      `;
      return db.query(command, values)
        .then(() => {
          // console.log("SUCCESS TASK PRIORITY");
          res.send();
        })
        .catch(err => console.log(err));
    });
  });

  // GET /tasks/auth
  router.get('/auth', (req, res) => {
    const token = req.headers['x-access-token'];
    // Respond with an empty object when no token is found.
    if (!token) {
      return res.send({});
    }
    // Respond with an empty object if the token verification fails.
    const user = services.verifyToken(token);
    if (!user) {
      return res.send({});
    }
    const { team_id } = user;
    const values = [team_id];
    const command = `
      SELECT tasks.*, team_id
      FROM tasks
        JOIN deliverables ON deliverable_id = deliverables.id
        JOIN projects ON project_id = projects.id
      WHERE team_id = $1;
    `;
    return db.query(command, values)
      .then(data => {
        const tasks = data.rows;
        // Respond with an empty object if the query doesn't return any rows.
        if (tasks.length === 0) {
          res.send({});
          // Respond with the correctly formatted data.
        } else {
          res.send(formatData(tasks));
        }
      });
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

  // DELETE /tasks/:id
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const values = [id];
    const command = `
      DELETE FROM tasks
      WHERE id = $1;
    `;
    return db.query(command, values)
      .then(() => res.send())
      .catch(() => res.status(500).send());
  });

  return router;
};