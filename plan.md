# Summary

1. Project Planning
2. Project Setup
3. Project Workflow
4. Project Development
5. Project Deployment
6. Project Presentation

# 1. Project Planning

In the planning phase, you’ll prepare several documents to help guide your team through the execution of your project.

**Deadline**: Finished and reviewed by a mentor on week 10 day 5.

## a) Project Description

You should have a document describing your project idea. In other words, what your project is all about. It should contain at least the following:

* Project title
  * Project Tracker (better name TBA)
* Project description - What problem your app solves
  * Description:
    * General all-purpose project tracker, ranging from small personal goals to large-scale
    enterprise projects.
  * Solutions:
    1. Plan deliverables
    2. Tracking tasks and progress
    3. Assign and track tasks to team members
* Target audience - Your app will be useful to whom?
  * Everyone
* Team members
  * Neale Taylor, Vivian Zhang, John Ming

**Deliverable:** Project description document

## b) User Stories

User stories allow you to draft the high-level requirements based on the user needs. It should describe the interaction of the user and the app.

* Register:
  * **(DONE)** Users can create a new account with a username, email, and password.
    * **(NOT STARTED)** They can also optionally enter a team registration code (to link to a team id). 

* Login/Logout:
  * **(DONE)** Users can sign into their account using their email and password.
  * **(DONE)** The nav bar conditionally renders the login/logout buttons.
  * **(DONE)** A JSON web token (JWT) is added to the browser's local storage upon a successfuly login.
    * **(DONE)** Clicking the 'logout' button will remove the JWT from the browser's local storage.

* Dashboard:
  * **(DONE)** Users can see their projects, deliverables, and tasks.
    * **(DONE)** Users can only see the data associated with their team id.
  * **(DONE)** Users can create, edit, or delete projects, deliverables, and tasks.
    * **(DONE)** When creating a deliverable or task, users can optionally mark them as high priority.
  * **(DONE)** Users can mark existing deliverables or tasks as high priority.
  * **(DONE)** Users can mark existing tasks as complete or incomplete.

* Scheduler:
  * **(IN PROGRESS)** Users can see a weekly scheduler:
    * **(IN PROGRESS)** 7 columns for Mon-Sun.
    * **(IN PROGRESS)** 24 rows for each hour in the day.
  * **(NOT STARTED)** Users can see a drop-down menu to select an existing project.
    * **(NOT STARTED)** When a project is selected, users can see the tasks that have been added to the scheduler.
      * **(NOT STARTED)** Users can add, edit, or remove tasks from the scheduler.
        * **(NOT STARTED)** Tasks that are added to the scheduler will automatically have their status changed to 'in progress'.
      * **(NOT STARTED)** Users can mark task on the calendar as 'complete'.
        * **(NOT STARTED)** Tasks marked as complete change into green on the scheduler.

* **(Stretch)** User Profile:
  * **(NOT STARTED)** Users can see their team id and team registration code.
  * **(NOT STARTED)** Users can see a list of their team member usernames.
  * **(NOT STARTED)** Users can add other users onto their team via their email.

**Deliverable:** User stories document

## c) Wireframes

Wireframes are a visual representation of the skeletal structure of your app. It should lay out the structure hierarchy and relationships between the different element of your app. Ideally, you should use a simple design software to get your wireframes done (draw.io, balsamiq, etc).

**Deliverable:** Wireframe designs

## d) Entity Relationship Diagram

You need to design the database ERD and define what are the tables and their relationships. You should use a design software (draw.io or any other) to draft the ERD.

**Deliverable:** ERD design

## e) Stack Choices

What are the technologies you’re going to use to develop for your app. You need to think about:

* Front-End
  * React
  * Material UI
  * SASS (maybe)
  * react-dnd (stretch)

* Back-End
  * Express
  * bcrypt
  * cookie-session
  * Node.js

* Database
  * PostgreSQL or MongoDB

**Deliverable:** Stack choices document

# 2. Project Setup

To start off on the right foot, you’ll need a good project setup:

## a) Git repo setup

Create a repo on GitHub and give access to all team members.

## b) Project scaffold

If needed, you have to decide which boilerplate code you’re going to use for your project.

## c) Database setup

You may need to create the database and the initial migration.

## d) Seed file

You may need to create a seed file since the content of the database should never be part of your repo. Each team member will have to seed their local database.

**Deliverable:** Setup of your app

# 3. Project Workflow

## a) Project Communication

We highly recommend that your group implements a daily stand up which will allow better communication and follow-up. You can appoint one member of your team to be the "Stand Up Master", or you can ask a mentor to help lead your stand up meetings. The stand up will allow to review:

* What has been accomplished
* What will you be working on
* What hurdles are you facing

**Deliverable:** Daily stand up

## b) Project Workflow

You need to take a few key decisions to ensure a smooth project workflow. Ideally, you should think about the following:

1. What are the project milestones: you need to create a list of the project milestones and specify what are the deadlines.

2. Git workflow: establish rules about how you’re going to manage your Git workflow. You can discuss it with a mentor if needed.

3. How to distribute teamwork: before distributing work, you might want to consider working together until you build the core of your app. Afterward, you need to think about how you will distribute the work among your team members.

4. Coding styles: consider establishing some coding guidelines to ensure consistency between team members.

**Deliverable:** Project milestones document

# 4. Project Development

You should work on the development of your app according to your feature list and project milestones. You should not develop any new features beyond week 11 day 5, since you need to prepare for Demo Day.

**Deadline:** Week 11, day 5

# 5. Project Deployment

You should have a production-ready local version of your app for Demo Day. Optionally, you might want to consider deploying your app on Heroku (or elsewhere). However, you need to account for the extra time to deploy on Heroku (or again, elsewhere).

## a) Testing, bug fixing

Make sure you take time to test the functionalities of your app. You need to think about:

* Testing, testing, testing
* Fixing bugs
* Refactoring your code
* Cleaning up your code

**Deadline:** Demo Day minus 2

6. Project Presentation

It’s important to take some time to structure the presentation of your app.

* Who is the target audience:
  * You have 2 targets: Employers and the public. For prospective employers you should focus on what you’ve accomplished, highlight - your skills, the technologies you used. For the public, it’s more about the user experience.
* You should have a script for the live demo. Optionally, you might want to consider using a power point.
* Audio/video setup: it’s important that you check your setup to ensure that everything works.
* Presentation practice: It’s important to practice before Demo Day. You should practice in front of a mentor so you can get some feedback.

**Deadlines:** - Practice Demo (with mentors): Demo Day minus 1 - Demo Day
