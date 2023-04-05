const { User } = require('../models');

const userController = {
  createUser(reg, res){
    
      console.log(req.body);

      User.create(req.body)
          .then((userData) => res.json(userData));
  },
    
    getUsers(req, res){
      User.find().then((data) => res.json(data));
    }
  };

  module.exports = userController;


