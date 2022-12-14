const { ObjectId } = require('mongoose').Types;
const {Thought, User } = require('../models');





module.exports = {


    async getUsers(req, res){
        const user = await User.find({});
        if(!user){
            return res.status(404).send('No users found');
        }
        res.json(user);
    } ,
    async getUserById(req, res){
        const user = await User.findById({_id: req.params.userId});
        if(!user){
            return res.status(404).send('No user found by this id');
        }
        res.json({
            user,
            friendCount: user.friendCount,
        });
    },

    async createNewUser(req, res){
        const user = await User.create(req.body);
        res.json(user);
    } ,
    async updateUser(req, res){
        const user = await User.findByIdAndUpdate({_id: req.params.userId}, req.body, {new: true});
        if(!user){
            return res.status(404).send('Cannot update user that does not exist');
        }
        res.json(user);
    } ,
    async removeUser(req, res){
        const user = await User.findByIdAndRemove({_id: req.params.userId});
        if(!user){
            return res.status(404).send('Cannot delete user because the user does not exist');
        }
        res.json(user);
    } ,

    async addFriend(req, res){
        const user = await User.findById(req.params.userId);
        if(!user){
            return res.status(404).send('Cannot add friend because the user does not exist');
        }
        user.friends.push(req.params.friendId);
        await user.save();
        res.json(user);
    } ,

    async removeFriend(req, res){
        const user = await User.findById(req.params.userId);
        if(!user){
            return res.status(404).send('Cannot remove friend because the user does not exist');
        }
        user.friends.pull(req.params.friendId);
        await user.save();
        res.json(user);
    } ,

    async getThoughts(req, res){
        const thoughts = await Thought.find({});
        if(!thoughts){
            return res.status(404).send('This user has no thoughts...');
        }
        res.json(thoughts);
    } ,

    async getThoughtById(req, res){
        const thought = await Thought.findById({_id: req.params.id});
        if(!thought){
            return res.status(404).send('Cannot find thought by this id');
        }
        res.json({
            thought,
            reactionCount: thought.reactionCount
        });
    } ,

    //to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

    async addThought(req, res){
        console.log(`adding thought to user ${req.body.userId}`);
        const thought = await Thought.create(req.body);
        const user = await User.findById({_id: req.body.userId});
        if(!user){
            return res.status(404).send('Cannot add thought because the user does not exist');
        }
        console.log(`adding thought ${thought._id} to user ${user._id}`);
        user.thoughts.push(thought);
        await user.save();
        res.json(thought);
    } ,

    async updateThought(req, res){
        const thought = await Thought.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});
        if(!thought){
            return res.status(404).send('Cannot update thought because the thought does not exist');
        }
        res.json(thought);
    } ,

    async removeThought(req, res){
        const thought = await Thought.findByIdAndRemove({_id: req.params.id});
        if(!thought){
            return res.status(404).send('Cannot delete thought because the thought does not exist');
        }
        res.json(thought);
    } ,
    async addReaction(req, res){
        const thought = await Thought.findById({_id: req.params.id});
        if(!thought){
            return res.status(404).send('Cannot add reaction because the thought does not exist');
        }
        console.log(req.body);
        thought.reactions.push(req.body);
        await thought.save();
        console.log(`AOUJSDHKLASJDHKAJSHDKLASDHAKLSHDAKLSDHAKSLDJH`)
        res.json(thought);
    } ,
    async removeReaction(req, res){
        const thought = await Thought.findById({_id: req.params.thoughtId});
        if(!thought){
            return res.status(404).send('Cannot remove reaction because the thought does not exist');
        }
        thought.reactions.pull(req.body);
        await thought.save();
        res.json(thought);
    } ,

    async addFriend(req, res){
        const user = await User.findById(req.params.userId);
        const friend = await User.findById(req.params.friendId);

        if(!user || !friend){
            return res.status(404).send('Cannot add friend because one of the users does not exist');
        }
        user.friends.push(req.params.friendId);
        friend.friends.push(req.params.userId);
        await user.save();
        await friend.save();
        res.json({user, friend});
    } ,

    async removeFriend(req, res){
        const user = await User.findById(req.params.userId);
        const friend = await User.findById(req.params.friendId);

        if(!user || !friend){
            return res.status(404).send('Cannot remove friend because one of the users does not exist');
        }
        user.friends.pull(req.params.friendId);
        friend.friends.pull(req.params.userId);
        await user.save();
        await friend.save();
        res.json({user, friend});

    }


}



    


