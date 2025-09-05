const express = require('express');
const ControllerTasks = require('../controller/taskController.js');
const route = express.Router();
const controller = new ControllerTasks();

/*route.post('/', (req,res) => controllerTasks.post(req,res));*/
route.get('/', (req,res) => controller.getAllTasks(req,res));
/*route.get('/:id', (req,res) => controllerTasks.getOneTasks(req,res));
route.put('/:id', (req,res) => controllerTasks.putTasks(req,res));
route.delete('/:id', (req,res) => controllerTasks.deleteTaskst(req,res));*/

module.exports = route;