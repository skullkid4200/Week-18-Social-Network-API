const { Thought, User } = require('../models');
const { ObjectId } = require('mongoose').Types;


const thoughtController = {
    getThoughts(req, res) {
        Thought.find().then((data) => res.json(data));
    },

    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Thought not found.' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    {_id: req.body.userId},
                    {$push: {thoughts: thought._id}},
                    {new: true}
                );
            })
            .then((thought) => 
            ! thought
            ? res 
            .status(404)
            .json({message: 'No user with this ID'})
            : res.json({message: 'Thought created.'})
            )
            .catch((err)=> {
                console.error(err);
            });
    },

    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Thought not found.' })
                    : res.status(200).json({ message: 'Thought was deleted.' })
            )
            .catch((err) => res.status(500).json(err));
    },

    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: { thought_text: req.body.thought_text } },
            { new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Thought not found.' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: ObjectId(req.params.thoughtId) },
            {
                $addToSet: {
                    reactions: {
                        reactionBody: req.body.reactionBody,
                        username: req.body.username
                    }
                }
            },
            { new: true }
        )
            .then((thought) =>
                !thought
                    ? res
                        .status(404)
                        .json({ message: 'Thought not found.' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    removeReaction(req, res) {
        Thought.findOneAndUpdate(
            {_id: ObjectId(req.params.thoughtId)},
            {$pull: {reactions: { _id: req.params.reactionId}}},
            {new: true}
        )
            .then((thought) =>
                !thought
                    ? res
                        .status(404)
                        .json({message: 'Thought not found.'})
                    : res.json(reaction)
            )
            .catch((err) => res.status(500).json(err));
    }

};

module.exports = thoughtController;
