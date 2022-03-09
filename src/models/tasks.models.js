const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Task = sequelize.define('task',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name:{
        type: DataTypes.TEXT
    },
    done:{
        type: DataTypes.BOOLEAN
    },
    projectid:{
        type: DataTypes.INTEGER
    }
},{
    timestamps: false
})

module.exports = Task;