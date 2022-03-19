const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const cors = require('cors'); // cors require

const db = require('./configs/db.config');

// Router modules
const indexRouter = require('./routes/index');
const projectsRouter = require('./routes/projects');
const deliverablesRouter = require('./routes/deliverables');
const tasksRouter = require('./routes/tasks');
const teamsRouter = require('./routes/teams');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors());

app.use('/', indexRouter);
app.use('/projects', projectsRouter(db));
app.use('/deliverables', deliverablesRouter(db));
app.use('/tasks', tasksRouter(db));
app.use('/teams', teamsRouter(db));
app.use('/users', usersRouter(db));

module.exports = app;
