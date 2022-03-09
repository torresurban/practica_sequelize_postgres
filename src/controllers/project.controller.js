const Project = require("../models/projects.models")

//! CREAR PROYECTO
const createProject = async (req, res) => {
    const { name, priority, description, deliverydate } = req.body
    try {
        
    const newProject = await Project.create({
        name, priority, description, deliverydate}, {fields:['name','priority','description','deliverydate']});
    if(newProject){
        return res.json({
            message: 'Proyecto creado satisfactoriamente',
            data: newProject
        })
    }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Algo va mal',
            data: {}
        })
    }
    
}

//! MOSTRAR TODO LOS PROYECTOS
const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll()
    res.json({
        data: projects
    })
    } catch (error) {
        console.log(error); 
    }
}

//! MOSTRAR UN PROYECTO ESPECÍFICO

const getProjectId = async (req, res) => {
    try {
        const { id } = req.params; 
        const project = await Project.findOne({ where: { id } });
        res.json(project)
    } catch (error) {
        console.log(error);
    }
}

//! ELIMINAR UN PROYECTO

const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRowCount = await Project.destroy({ where: {id} });

        res.json({
            message: 'Proyecto eliminado satisfacoriamente',
            count: deleteRowCount
        })
    } catch (error) {
        console.log(error);
    }
}

//! ACTUALIZAR PROYECTO

const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, priority, description, deliverydate } = req.body;
        const projects = await Project.findAll({
            attributes: ['id', 'name', 'priority','description','deliverydate'],
            where:{
                id
            }
        });

        if(projects.length > 0){
            projects.forEach(async project => {
                await project.update({name, priority, description, deliverydate});
            })
        }

        return res.json({
            message: 'Proyecto actualizado satisfactoriamente',
            data: projects
        })
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    createProject,
    getProjects,
    getProjectId,
    deleteProject,
    updateProject
}