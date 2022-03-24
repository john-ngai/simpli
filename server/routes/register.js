const router = require('express').Router();
const services = require('../services');
const database = require('../database');
const hexNumGenerator = require('../helpers/hexNumGenerator');

module.exports = (db) => {
  // GET /register
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command).then(data => {
      return res.json(data.rows);
    });
  });

  // PUT /register
  router.put('/', (req, res) => {
    const { name, email, password, team } = req.body;
    let team_id = null;

    // If the user exists, return an error.
    database.findUserByEmail(email)
      .then(data => {
        if (data) {
          return res.send({ error: 'registered email' });
        }
      })

      .then(() => database.findTeamByCode(team))
      .then(data => {
        // If the team code doesn't exist, return an error,
        if (!data) {
          return res.send({ error: 'invalid team' });
        // Otherwise, store the existing team id in a variable.
        } else {
          return data.id ? team_id = data.id : null;
        }
      })


      // .then(() => {
      //   const hashedPassword = services.hashPassword(password);
      //   if (!team_id) {
      //     // First create a new team, get the team id, then create a new user.
      //     team = hexNumGenerator(6);
      //     const values = [team];

      //   } else {
      //     // Create 
      //   }
        
      // });
      
    
    // const values = [name, email, hashedPassword, 1];
    // const command = `
    // INSERT INTO users (name, email, password, team_id)
    // VALUES ($1, $2, $3, $4)
    // RETURNING *;
    // `;
    // return db.query(command, values)
    //   .then(data => res.send(data.rows[0]))
    //   .catch(err => console.log(err));
  })

  return router;
};