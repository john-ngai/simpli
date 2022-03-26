const router = require('express').Router();

module.exports = (db) => {
  // GET /schedule
  router.get('/', (req, res) => {
    const command = `
      SELECT schedule.*,
        tasks.name,
        tasks.description,
        project_id
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
            task: {
              id: element['task_id'],
              name: element.name,
              description: element.description
            }
          }
        }
        res.send(object);
      });
  });

  // PUT /schedule
  router.put('/', (req,res) => {
    const {day_id, start_time, end_time} = req.body;
    const values = {day_id, start_time, end_time, task_id};
    const command = `
    INSERT INTO schedule (day_id, start_time, end_time, task_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `;
    return db.query(command, values)
      .then(data => res.send(data.rows[0]));
  });

  return router;
};