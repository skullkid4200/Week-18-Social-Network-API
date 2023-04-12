const { User } = require('../models');

const userController = {
  createUser(req, res) {

    console.log(req.body);

    User.create(req.body)
      .then((userData) => res.json(userData));
  },

  getUsers(req, res) {
    User.find().then((data) => res.json(data));
  },

  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User not found.' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: { email: req.body.email } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User not found.' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User not found.' })
          : res.status(200).json({ message: `#${req.params.userId} was deleted.` })
      )
      .catch((err) => res.status(500).json(err));
  },
  createFriend(req, res) {
    {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { friends: req.params.friendId } },
        { runValidators: true, new: true })
        .then((user) => res.json(user))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    }
  },
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User not found.' })
          : res.json(user)
      )
      .then(() => res.json({ message: 'Friend deleted.' }))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = userController;


