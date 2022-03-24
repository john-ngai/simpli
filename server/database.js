// Dependencies
const db = require('./configs/db.config');
const hexNumGenerator = require('./helpers/hexNumGenerator');

// Return the user if it exists.
const findUserByEmail = email => {
  const values = [email];
  const command = `
    SELECT * FROM users
    WHERE email = $1;
  `;
  return db.query(command, values)
    .then(res => res.rows[0]);
}
exports.findUserByEmail = findUserByEmail;

// Return the team if it exists or generate a new team code.
const findTeamByCode = code => {
  // If the code is empty, return the id as null.
  if (!code) {
    return { id: null };
  }

  // Return the team if it exists.
  const values = [code];
  const command = `
    SELECT * FROM teams
    WHERE code = $1;
  `;
  return db.query(command, values)
    .then(res => res.rows[0]);
}
exports.findTeamByCode = findTeamByCode;

// Create and return a new team if the given team id is null.
const createTeam = team_id => {
  if (team_id) {
    return { id: team_id };
  }
  const values = [hexNumGenerator(6)];
  command = `
    INSERT INTO teams (code)
    VALUES ($1)
    RETURNING *;
  `;
  return db.query(command, values)
    .then(res => res.rows[0]);
}
exports.createTeam = createTeam;

// Create a new user.
const createUser = (name, email, password, team_id) => {
  values = [name, email, password, team_id];
  command = `
    INSERT INTO users (name, email, password, team_id)
    values ($1, $2, $3, $4);
  `;
  return db.query(command, values);
}
exports.createUser = createUser;