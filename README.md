# Simpli Project

Simpli is a team-based project tracking productivity app. Projects are mapped through a list of deliverables, each containing it's own list of tasks.

## Final Product

!["Sign up page with an option to register using a team code"](https://github.com/mrjohnming/lighthouse-final-project/blob/john/scheduler/docs/01_sign-up.png)
!["Summary page display a list of projects and it's associated deliverables"](https://github.com/mrjohnming/lighthouse-final-project/blob/john/scheduler/docs/02_projects%26deliverables.png)
!["List of tasks belonging to a single deliverable"](https://github.com/mrjohnming/lighthouse-final-project/blob/john/scheduler/docs/03_deliverable%26tasks.png)
!["Scheduler page to view and schedule tasks for the week"](https://github.com/mrjohnming/lighthouse-final-project/blob/john/scheduler/docs/04_scheduler-1.png)
!["Save/edit a task, mark it as completed, or remove it from the scheduler"](https://github.com/mrjohnming/lighthouse-final-project/blob/john/scheduler/docs/05_scheduler-2.png)
!["User profile page with additional info about the team"](https://github.com/mrjohnming/lighthouse-final-project/blob/john/scheduler/docs/06_user-profile.png)

## Front-End Dependencies

* react, react-dom, react-router-dom
* axios
* classnames
* mui

## Back-End Dependencies

* node.js
* express
* dotenv
* pg
* bcrypt
* jsonwebtoken

## Getting started

1. `npm install` all of the dependencies inside the server and client directories.
2. Inside the `server` directory, copy the `.env.example` file and name it `.env`.
3. Inside `psql`, create a user and database using the info found inside the `.env` file.
4. Create the database tables and rows by inserting all of the files found inside `/server/db/schema` and `/server/db/seeds`.
5. Open two command-line windows, with one inside `/server`, the other inside `/cient`, and run `npm start` on both of them.
