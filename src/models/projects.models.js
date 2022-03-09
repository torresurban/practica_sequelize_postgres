const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const Task = require('./tasks.models');

const Project = sequelize.define('projects',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name:{
        type: DataTypes.TEXT
    },
    priority:{
        type: DataTypes.INTEGER
    },
    description:{
        type: DataTypes.TEXT
    },
    deliverydate:{
        type: DataTypes.DATE
    }
},{
    timestamps:false
})

Project.hasMany(Task, { foreignKey: 'projectid', sourceKey: 'id' });
Task.belongsTo(Project, { foreignKey: 'projectid', sourceKey:'id' });

module.exports = Project