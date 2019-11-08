const express = require('express')

const Projects = require('../model/project-model')

const router = express.Router();

////////////
//PROJECTS//
////////////

//get projects
router.get("/", (req, res) => {
    Projects.getProjects()
      .then(projects => {
        res.status(200).json(projects);
      })
      .catch(err => {
        res.status(500).json({ message: "Error fetching projects from database" });
      });
});

//post new project
router.post('/', (req,res) => {
    const id = req.params.id;
    const body = req.body;
    Projects.addProjects(body,id)
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json({ error: 'failed to add project' })
    })
})

/////////////
//RESOURCES//
/////////////

//get resources
router.get("/resources", (req, res) => {
    Projects.getResources()
      .then(resources => {
        res.status(200).json(resources);
      })
      .catch(err => {
        res.status(500).json({ message: "Error fetching resources from database" });
      });
});

router.post('/resources', (req,res) => {
    const id = req.params.id;
    const body = req.body;
    Projects.addResources(body,id)
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(err => {
        res.status(500).json({ error: 'failed to add resource' })
    })
})



/////////
//TASKS//
/////////

//get all tasks
router.get('/tasks', (req,res) => {
    // const { id } = req.params.id
    Projects.getAllTasks()
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => {
        res.status(500).json({ error: 'failed to get task' })
    })
})

//get tasks by ID
router.get('/:id/tasks', (req,res) => {
    const { id } = req.params;
    Projects.getTasks(id)
    .then(tasks => {
        res.json(tasks);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get task' })
    })
})

//add tasks
router.post('/:id/tasks', (req,res) => {
    const id = req.params.id;
    const body = req.body;
    Projects.addTasks(body,id)
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => {
        res.status(500).json({ error: 'failed to get task' })
    })
})

module.exports = router;