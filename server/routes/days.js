const router = require('express').Router();

module.exports = (db) => {
  // GET /days
  router.get('/', (req, res) => {
    const days = 'SELECT * FROM days;';
    const schedule = 'SELECT * FROM schedule;';
    Promise.all([
      db.query(days),
      db.query(schedule)
    ])
      .then(all => {
        const days = all[0].rows;
        days.forEach(day => day.schedule = []);
        const schedule = all[1].rows;
        days.forEach(day => {
          schedule.forEach(item => {
            if (day.id === item['day_id']) {
              day.schedule.push(item.id);
            }
          })
        });
        return res.send(days);
      })
  });

  return router;
};