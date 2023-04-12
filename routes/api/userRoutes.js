const router = require('express').Router();
const { createFriend, deleteFriend, getUsers, createUser, getSingleUser, updateUser, deleteUser } = require('../../controllers/userController');

router.route('/')
    .post(createUser)
    .get(getUsers);

router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

router.route('/:userId/friends/:friendId')
.post(createFriend)
.delete(deleteFriend)

router.route('/:userId')
.get(getSingleUser)
.delete(deleteUser)
.put(updateUser)

module.exports = router;
