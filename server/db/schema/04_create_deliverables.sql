-- schema/04_create_deliverables.sql
DROP TABLE IF EXISTS deliverables CASCADE;
-- CREATE DELIVERABLES
CREATE TABLE deliverables (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  priority BOOLEAN NOT NULL,
  status VARCHAR(255) NOT NULL,
  project_id INTEGER REFERENCES projects (id) ON DELETE CASCADE
);