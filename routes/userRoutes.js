const router = require('express').Router();
const User = require('../models/user');
const{
    getUsers,
    getUserById,
    createNewUser,
    updateUser,
    removeUser,
    addFriend,
    removeFriend,
    getThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require ('../controllers/userController');

//user routes

router.route('/users').get(getUsers).
get(getUserById).
put(updateUser).
post(createNewUser).
delete(removeUser);

//friend routes

router.route('/users/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

//thought routes

router.route('/thoughts').get(getThoughts)
.get(getThoughtById)
.post(addThought)
.put(updateThought)
.delete(removeThought);

//reaction routes

router.route('/thoughts/:thoughtId/reactions').post(addReaction)
.delete(removeReaction);



