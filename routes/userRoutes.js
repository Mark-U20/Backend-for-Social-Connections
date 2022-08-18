const router = require('express').Router();
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
post(createNewUser)

//get user by id
router.route('/users/:userId').get(getUserById).
delete(removeUser)
.put(updateUser);
;

//friend routes

router.route('/users/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

//thought routes

router.route('/thoughts').get(getThoughts)
.post(addThought)
.put(updateThought)

//thought by id routes
router.route('/thoughts/:id').get(getThoughtById)
.delete(removeThought)
.put(updateThought);


//reaction routes

router.route('/thoughts/:id/reactions').post(addReaction)
.delete(removeReaction);


router.route('/users/:userId/friends/:friendId').post(addFriend).delete(removeFriend);



module.exports = router;

