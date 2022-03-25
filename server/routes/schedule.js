const router = require('express').Router();

module.exports = (db) => {
  // GET /schedule
  router.get('/', (req, res) => {
    const command = `
      SELECT schedule.*, name, description
      FROM schedule JOIN tasks ON task_id = tasks.id;
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

  return router;
};