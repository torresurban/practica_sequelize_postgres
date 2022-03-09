const Task = require("../models/tasks.models");

//! CREAR UNA TAREA

const createTask = async (req,res) => {
    try {
        const { name, done, projectid } = req.body;
        await Task.create({name, done, projectid},{
            fields: ['name', 'done', 'projectid']
        });

        res.json({message:'Tarea nueva creada'})
    } catch (error) {
        console.log(error);
    }
}

//! OBTENER TODAS LAS TAREAS

const getTasks = async (req,res) => {
    try {
        const tasks = await Task.findAll({
            attributes: ['id','projectid','name','done'],
            order: [
                ['id','DESC']
            ]
        });
        res.json(tasks)
    } catch (error) {
        console.log(error);
    }
}

//! OBTENER UN ATAREA

const getOneTask = async (req,res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({
            where: { id },
            attributes: ['id','projectid','name','done']
        });

        res.json({task})

    } catch (error) {
        console.log(error);
    }
}

//! ACTUALIZAR UNA TAREA

const updateTask = async (req,res) => {
    try {
        const { id } = req.params;
        const { projectid, name, done } = req.body;
        const task = await Task.findOne({
            attributes: ['name', 'projectid','done','id'],
            where: {id}
        });

        const updateTask = await Task.update({name, done, projectid},
            {
                where: {id}
            });

        res.json({
            message: 'Tarea actualizada',
            updateTask
        })

    } catch (error) {
        console.log(error);
    }
}

//! ELIMINAR UNA TAREA

const deleteTask = async (req,res) => {
    try {
        const { id } = req.params;
        await Task.destroy({
            where: {
                id
            }
        });

        res.json({message: 'Tarea eliminada'})
    } catch (error) {
            console.log(error);
    }
}

const getTaskByProject = async (req, res) => {
    try {
        const { projectid } = req.params;
        const tasks = await Task.findAll({
            attributes: ['id','projectid','done','name'],
            where: {projectid}
        });

        res.json(tasks)

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createTask,
    getTasks,
    getOneTask,
    updateTask,
    deleteTask,
    getTaskByProject
}