const router = require('express').Router();

module.exports = (db) => {
  // GET /schedule
  router.get('/', (req, res) => {
    const command = `
      SELECT schedule.*,
        tasks.name,
        tasks.description,
        tasks.status AS completed,
        project_id,
        deliverable_id
      FROM schedule
        JOIN tasks ON task_id = tasks.id
        JOIN deliverables ON deliverable_id = deliverables.id;
    `;
    db.query(command)
      .then(data => {
        const array = Object.values(data.rows);
        const object = {};
        for (const element of array) {
          object[element.id] = {
            id: element.id,
            start_time: element['start_time'],
            end_time: element['end_time'],
            day_id: element['day_id'],
            project_id: element['project_id'],
            deliverable_id: element['deliverable_id'],
            task: {
              id: element['task_id'],
              name: element.name,
              description: element.description,
              completed: element.completed
            }
          }
        }
        res.send(object);
      });
  });

  // PUT /schedule
  router.put('/', (req,res) => {
    const { start_time, end_time, day_id, task } = req.body;
    const task_id = task.id;
    const values = [start_time, end_time, day_id, task_id];
    const command = `
      INSERT INTO schedule (start_time, end_time, day_id, task_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;    
    return db.query(command, values)
      .then(data => res.send(data.rows[0]));
  });

  // PUT /schedule/:id
  router.put('/:id', (req,res) => {
    const id = req.params.id;
    const { day_id, start_time, end_time, task } = req.body;
    const task_id = task.id;
    const values = [day_id, start_time, end_time, task_id, id];
    const command = `
      UPDATE schedule
      SET day_id = $1,
        start_time = $2, end_time = $3,
        task_id = $4
      WHERE id = $5;
    `;
    return db.query(command, values)
      .then(() => res.send());
  });

  // DELETE /schedule/:id
  router.delete('/:id', (req,res) => {
    const values = [req.params.id];
    const command = `
      DELETE FROM schedule
      WHERE id = $1;
    `;
    return res.send();
    return db.query(command, values)
      .then(() => res.send());
  });

  return router;
};