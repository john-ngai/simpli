-- schema/06_create_schedule.sql
DROP TABLE IF EXISTS schedule CASCADE;
-- CREATE SCHEDULE
CREATE TABLE schedule (
  id SERIAL PRIMARY KEY,
  start_time VARCHAR(4) NOT NULL,
  end_time VARCHAR(4) NOT NULL,
  day_id INTEGER REFERENCES days (id) ON DELETE CASCADE,
  task_id INTEGER REFERENCES tasks (id) ON DELETE CASCADE
);