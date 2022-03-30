-- Project #1: Spring Cleaning > Deliverable #1: Main floor (tasks #1-6)
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Living Room', 'Clean & move the furniture out of the way', false, false, 1);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Library', '', false, true, 1);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Bathroom', '', true, false, 1);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Kitchen', '', false, false, 1);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Vacuum & mop the floor', '2nd last step', false, false, 1);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Replace air filter', 'Last step', false, false, 1);
-- Project #1: Spring Cleaning > Deliverable #2: 2nd floor (tasks #7-15)
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Master bedroom', '', true, false, 2);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Master bathroom', '', false, false, 2);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Guest bedroom', '', false, true, 2);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Guest Bathroom', '', false, true, 2);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Bedroom #1', '', false, false, 2);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Bedroom #2', '', false, false, 2);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Bedroom #3', '', false, false, 2);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Shared Bathroom', '', false, false, 2);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Vacuum & mop the floor', 'Last step', false, false, 2);
-- Project #1: Spring Cleaning > Deliverable #3: Basement (tasks #16-18)
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Sort out the donation pile', '', false, true, 3);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Vacuum the entire carpet', '', false, false, 3);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Purchase a new laundry appliances', 'Budget $3000', false, false, 3);
-- Project #1: Spring Cleaning > Deliverable #4: Garage (tasks #19-21)
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Rent a cement cleaner', '', false, false, 4);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Wipe down all surfaces', '', false, false, 4);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Wash & wax the cars', '', false, false, 4);
-- Project #1: Spring Cleaning > Deliverable #5: Yard (tasks #22-23)
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Clean-up winter debris', '', false, true, 5);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Re-install the hose', 'Turn on water valve', false, true, 5);


-- Project #2: Create a Project Tracker Web App > Deliverable #6: Demo presentation (tasks #24-26)
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Practice with group', '', false, true, 6);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Dont mess up', '', true, false, 6);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Celebrate afterwards', '', false, false, 6);
-- Project #2: Create a Project Tracker Web App > Deliverable #7: Client - User page (tasks #27-29)
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Display team members', '', false, true, 7);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Display team name', '', false, true, 7);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Display team code', '', false, true, 7);
-- Project #2: Create a Project Tracker Web App > Deliverable #8: Client - Scheduler page (tasks #30-34)
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Create a projects drop-down menu', '', false, true, 8);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Display calendar view for each project', '', false, true, 8);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Display deliverables & tasks progress', '', false, true, 8);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Add, edit, or delete tasks from the calendar', '', false, true, 8);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Mark tasks as completed or high priority', '', false, true, 8);
-- Project #2: Create a Project Tracker Web App > Deliverable #9: Client - Register & login pages (tasks #35-37)
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Use JSON web token for authentication', '', false, true, 9);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Create the register page', 'Add an optional team code field', false, true, 9);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Create the login page', '', false, true, 9);
-- Project #2: Create a Project Tracker Web App > Deliverable #10:  Client - Summary page (tasks #38-42)
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Projects list', '', false, true, 10);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Deliverables list', '', false, true, 10);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Tasks list', '', false, true, 10);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Progress info/bars', '', false, true, 10);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Add, delete, edit, & high priority buttons', '', false, true, 10);
-- Project #2: Create a Project Tracker Web App > Deliverable #11:  Server - Helper functions (tasks #43-44)
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('JWT authentication', '', false, true, 11);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Data formatting', '', false, true, 11);
-- Project #2: Create a Project Tracker Web App > Deliverable #12:  Server - Routes (tasks #45-53)
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('/users', '', false, true, 12);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('/teams', '', false, true, 12);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('/register', '', false, true, 12);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('/login', '', false, true, 12);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('/projects', '', false, true, 12);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('/deliverables', '', false, true, 12);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('/tasks', '', false, true, 12);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('/days', '', false, true, 12);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('/schedule', '', false, true, 12);
-- Project #2: Create a Project Tracker Web App > Deliverable #13:  Server - Database (tasks #54-55)
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Schemas', '', false, true, 13);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Seeds', '', false, true, 13);
-- Project #2: Create a Project Tracker Web App > Deliverable #14:  Setup project folder (tasks #56-57)
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Client - React', '', false, true, 14);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Server - Express', '', false, true, 14);
-- Project #2: Create a Project Tracker Web App > Deliverable #15:  Create a plan (tasks #58-60)
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('User stories', '', false, true, 15);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Website wireframe', '', false, true, 15);
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Entity Relationship Diagram', '', false, true, 15);


-- Deliverable #16: Research best courses
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Create a shortlist of 3-5 courses', '', false, false, 16);

-- Deliverable #17: Create a self-learning schedule
INSERT INTO tasks (name, description, priority, status, deliverable_id) VALUES ('Create a schedule using Google Sheets', '', FALSE, false, 17);