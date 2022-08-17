const { ObjectId } = require('mongodb').Types;
const { Reaction, Thought, User } = require('../models');
/*
    //getUsers,
    //getUserById,
    //createNewUser,
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
*/



module.exports = {


    async getUsers(req, res){
        const user = await User.find({});
        if(!user){
            return res.status(404).send('No users found');
        }
        res.json(user);
    } ,
    async getUserById(req, res){
        const user = await User.findById(req.params.userId);
        if(!user){
            return res.status(404).send('No user found');
        }
        res.json(user);
    },

    async createNewUser(req, res){
        const user = await User.create(req.body);
        res.json(user);
    } ,
    async updateUser(req, res){
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true});
        if(!user){
            return res.status(404).send('No user found');
        }
        res.json(user);
    } ,








    }



    


