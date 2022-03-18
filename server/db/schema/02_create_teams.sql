-- schema/02_create_teams.sql
DROP TABLE IF EXISTS teams CASCADE;
-- CREATE TEAMS
CREATE TABLE teams (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);