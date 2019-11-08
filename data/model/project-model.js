const db = require("../db-config")

module.exports = {
    getResources,
    getProjects,
    getTasks,
    addResources,
    addProjects,
    addTasks,
    getAllTasks
}

function getResources(){
    return db('resources')
}

function getProjects(){
    return db('projects')
}

function getTasks(project_id){
    //include the proj name and desc
    return db
    .select('p.id', 'p.project_name', 'p.project_description', 't.tasks_description', 't.tasks_notes', 't.completed')
    .from('projects as p')
    .innerJoin('tasks as t', 'p.id', 't.project_id')
    .where({ project_id: project_id });
}

function getAllTasks(){
    return db('tasks')
}

function addResources(resource){
    return db.insert(resource, 'id')
    .into('resources')
}

function addProjects(project){
    return db.insert(project, 'id')
    .into('projects')
}

function addTasks(tasks, id){
    return db.insert(tasks, 'id')
    .into('tasks')
    .where({ project_id: id })
}