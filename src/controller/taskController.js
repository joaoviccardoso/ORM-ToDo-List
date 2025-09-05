const { task } = require('../models');

class ControllerTasks{
  async getAllTasks (req, res){
    try {
      const AllTaskc = await task.findAll();
      return res.status(201).json(AllTaskc); 
    } catch (error) {
      //erro
    }
  }

  /*etOneTasks(req, res){

  }

  postTasks(req, res){

  }

  putTasks(req, res){

  }

  deleteTaskst(req, res){

  }*/
}

module.exports = ControllerTasks;