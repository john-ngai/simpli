-- schema/03_create_projects.sql
DROP TABLE IF EXISTS projects CASCADE;
-- CREATE PROJECTS
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  completed_deliverables INTERGER,
  total_deliverables INTEGER,
  team_id INTEGER REFERENCES teams (id) ON DELETE CASCADE
);
