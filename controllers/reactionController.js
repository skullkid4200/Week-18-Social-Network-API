// const { User } = require('../models');

// const reactionController = {
//     addReaction(req, res) {
//         thought.findOneAndUpdate(
//             { _id: req.params.thoughtId },
//             { $addToSet: { reactionBody: req.body } },
//             { runValidators: true, new: true }
//         )
//             .then((thought) =>
//                 !thought
//                     ? res
//                         .status(404)
//                         .json({ message: 'Thought not found.' })
//                     : res.json(thought)
//             )
//             .catch((err) => res.status(500).json(err));
//     },

//     removeReaction(req, res) {
//         thought.findOneAndUpdate(
//             { _id: req.params.thoughtId },
//             { $pull: { reactions: { reactionId: req.params.reactionId } } },
//             { runValidators: true, new: true }
//         )
//             .then((thought) =>
//                 !thought
//                     ? res
//                         .status(404)
//                         .json({ message: 'Thought not found.' })
//                     : res.json(reaction)
//             )
//             .catch((err) => res.status(500).json(err));
//     }
// };

// module.exports = reactionController;
