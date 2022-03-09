const express = require('express');
const morgan = require('morgan');
const projectRoutes = require('./routes/projects');
const taskRoutes = require('./routes/tasks')

const app = express()

//middleware
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);


module.exports = app;