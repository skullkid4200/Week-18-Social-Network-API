const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought
} = require('../../controllers/thoughtController');

router.route('/')
    .post(createThought)
    .get(getThoughts);

router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

const {
    addReaction,
    removeReaction

} = require('../../controllers/thoughtController');

router.route('/:thoughtId/reactions').post(addReaction)
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;




