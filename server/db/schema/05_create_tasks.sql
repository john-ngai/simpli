-- schema/04_create_task.sql
DROP TABLE IF EXISTS tasks CASCADE;
-- CREATE TASKS
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  priority BOOLEAN NOT NULL,
  status VARCHAR(255) NOT NULL,
  deliverable_id INTEGER REFERENCES deliverables (id) ON DELETE CASCADE
);