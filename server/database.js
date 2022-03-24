// Dependencies
const db = require('./configs/db.config');

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
  // Return a randomly generated team code.
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
