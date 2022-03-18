Create - POST
Read - GET
Update - PUT
Destroy - DELETE

## Index /

* Show main project summary page when signed in

## Register

* GET /register - Render register page
* POST /register - Attempt to register with credentials

## Login

* GET /login - Render login page
* POST /login - Attempt to login with credentials

## Logout

* POST /logout

## Projects

* GET /projects/new - Render a new project form

* POST /projects - Create a new project
* GET /projects/:id - Read a project id
* PUT /project/:id - Update a project id

* POST /projects/:id/deliverables
* GET /projects/:id/deliverables/:id
* PUT /projects/:id/deliverables/:id

* POST /projects/:id/deliverables/:id/tasks
* GET /projects/:id/deliverables/:id/tasks/:id
* PUT /projects/:id/deliverables/:id/tasks/:id
